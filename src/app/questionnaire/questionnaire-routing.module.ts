import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewQuestionnaireComponent } from './new-questionnaire/new-questionnaire.component';
import { FillOutQuestionnaireComponent } from './fill-out-questionnaire/fill-out-questionnaire.component';

import { AuthGuard } from '../auth/guards/auth.guard';
import { TemplateResolverService } from './guards/template-resolver.service';
import { NewQuestionnaireResolverService } from './guards/new-questionnaire-resolver.service';


const routes: Routes = [
  { path: 'questionnaires', children: [
      { path: '', canActivateChild: [AuthGuard], children: [
          { path: 'new', component: NewQuestionnaireComponent, resolve: { templates: NewQuestionnaireResolverService } }
        ] }
    ] },
  { path: 'questionnaire', children : [
  { path: '', canActivateChild: [AuthGuard], children: [
      { path: ':questionnaireID', component: FillOutQuestionnaireComponent, resolve: { questionnaire: TemplateResolverService } }
    ] }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnaireRoutingModule { }
