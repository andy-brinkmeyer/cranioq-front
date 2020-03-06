import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewQuestionnaireComponent } from './new-questionnaire/new-questionnaire.component';
import { FillOutQuestionnaireComponent } from './fill-out-questionnaire/fill-out-questionnaire.component';

import { AuthGuard } from '../auth/guards/auth.guard';


const routes: Routes = [
  { path: 'questionnaires', children: [
      { path: '', canActivateChild: [AuthGuard], children: [
          { path: 'new', component: NewQuestionnaireComponent }
        ] }
    ] },
  { path: 'q-templates', component: FillOutQuestionnaireComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnaireRoutingModule { }
