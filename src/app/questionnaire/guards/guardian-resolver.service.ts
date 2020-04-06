import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';

import {Observable, of} from 'rxjs';
import {catchError, mergeMap, take} from 'rxjs/operators';

import { QuestionnaireTemplate } from '../models/templates';
import { QuestionnaireService } from '../services/questionnaire.service';


@Injectable({
  providedIn: 'root'
})
export class GuardianResolverService implements Resolve<QuestionnaireTemplate> {

  constructor(
    private questionnaireService: QuestionnaireService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<QuestionnaireTemplate>
    | Promise<QuestionnaireTemplate> | QuestionnaireTemplate {
    const accessID = route.paramMap.get('accessID');
    return this.questionnaireService.getByAccessID(accessID).pipe(
      take(1),
      mergeMap(questionnaire => of(questionnaire.template)),
      catchError(error => {
        this.router.navigate(['/guardian']);
        if (error.error instanceof ErrorEvent) {
          return of(error.error.message);
        } else {
          return of(error.error.error_message);
        }
      })
    );
  }
}
