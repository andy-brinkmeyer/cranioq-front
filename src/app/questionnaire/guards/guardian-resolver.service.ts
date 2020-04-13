import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';

import {Observable, of} from 'rxjs';
import {catchError, take} from 'rxjs/operators';

import { Questionnaire } from '../models/questionnaire';
import { QuestionnaireService } from '../services/questionnaire.service';
import { AuthStorageService } from '../../auth/services/auth-storage.service';


@Injectable({
  providedIn: 'root'
})
export class GuardianResolverService implements Resolve<Questionnaire> {

  constructor(
    private questionnaireService: QuestionnaireService,
    private router: Router,
    private authStorageService: AuthStorageService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Questionnaire>
    | Promise<Questionnaire> | Questionnaire {
    const accessID = route.paramMap.get('accessID');
    this.authStorageService.logout();
    return this.questionnaireService.getByAccessID(accessID).pipe(
      take(1),
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
