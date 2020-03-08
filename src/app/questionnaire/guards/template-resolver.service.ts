import { Injectable } from '@angular/core';

import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

import { QuestionnaireTemplate } from '../models/templates';
import { QuestionnaireStore } from '../stores/questionnaire-store.service';
import { TemplateService } from '../services/template.service';


@Injectable({
  providedIn: 'root'
})
export class TemplateResolverService implements Resolve<QuestionnaireTemplate> {

  constructor(
    private questionnaireStore: QuestionnaireStore,
    private templateService: TemplateService,
    private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<QuestionnaireTemplate> | Promise<QuestionnaireTemplate> | QuestionnaireTemplate {

    const templateID = this.questionnaireStore.stateSnapshot.get('templateID');
    return this.templateService.getTemplate(templateID).pipe(
      take(1),
      mergeMap(template => {
        if (template) {
          return of(template);
        } else {
          this.router.navigate(['/dashboard']);
          return EMPTY;
        }
      })
    );
  }
}
