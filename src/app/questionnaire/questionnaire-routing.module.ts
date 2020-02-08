import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NewQuestionnaireComponent} from './new-questionnaire/new-questionnaire.component';



const routes: Routes = [
  { path: 'questionnaires', children: [
      { path: 'new', component: NewQuestionnaireComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnaireRoutingModule { }
