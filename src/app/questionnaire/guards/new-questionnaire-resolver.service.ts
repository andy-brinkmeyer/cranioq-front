import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

import {EMPTY, Observable, of} from 'rxjs';

import { TemplateService } from '../services/template.service';

import { TemplateInformation } from '../models/templates';
import {catchError, mergeMap, take} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NewQuestionnaireResolverService implements Resolve<Array<TemplateInformation>> {

  constructor(private router: Router,
              private templateService: TemplateService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<TemplateInformation>> |
    Promise<Array<TemplateInformation>> | Array<TemplateInformation> {

    return this.templateService.getTemplates().pipe(
      take(1),
      mergeMap(templates => {
        if (templates) {
          return of(templates);
        } else {
          this.router.navigate(['/dashboard']);
          return EMPTY;
        }
      }),
      catchError(error => {
        this.router.navigate(['/dashboard']);
        if (error.error instanceof ErrorEvent) {
          return of(error.error.message);
        } else {
          return of(error.error.error_message);
        }
      })
    );
  }
}
