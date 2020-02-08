import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { NewQuestionnaireComponent } from './new-questionnaire/new-questionnaire.component';


@NgModule({
  declarations: [NewQuestionnaireComponent],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule
  ]
})
export class QuestionnaireModule { }
