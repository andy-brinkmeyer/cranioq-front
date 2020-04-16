import { Injectable } from '@angular/core';

import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, of} from 'rxjs';
import {catchError, take} from 'rxjs/operators';

import { Questionnaire } from '../models/questionnaire';
import { QuestionnaireStore } from '../stores/questionnaire-store.service';
import { QuestionnaireService } from '../services/questionnaire.service';


@Injectable({
  providedIn: 'root'
})
export class TemplateResolverService implements Resolve<Questionnaire> {

  constructor(
    private questionnaireStore: QuestionnaireStore,
    private router: Router,
    private questionnaireService: QuestionnaireService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Questionnaire> | Promise<Questionnaire> | Questionnaire {

    const questionnaireID = parseInt(route.paramMap.get('questionnaireID'), 10);
    return this.questionnaireService.get(questionnaireID).pipe(
      take(1),
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
