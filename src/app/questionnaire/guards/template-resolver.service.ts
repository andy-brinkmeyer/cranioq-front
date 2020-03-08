import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { QuestionnaireTemplate } from '../models/templates';
import { QuestionnaireStore } from '../stores/questionnaire-store.service';
import { TemplateService } from '../services/template.service';


@Injectable({
  providedIn: 'root'
})
export class TemplateResolverService implements Resolve<QuestionnaireTemplate> {

  constructor(
    private questionnaireStore: QuestionnaireStore,
    private templateService: TemplateService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<QuestionnaireTemplate> | Promise<QuestionnaireTemplate> | QuestionnaireTemplate {
    let templateID: number;
    this.questionnaireStore.state.subscribe(currentState => templateID = currentState.get('templateID'));

    return this.templateService.getTemplate(1);
  }
}
