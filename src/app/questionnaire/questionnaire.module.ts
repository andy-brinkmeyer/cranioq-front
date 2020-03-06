import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { NewQuestionnaireComponent } from './new-questionnaire/new-questionnaire.component';
import { FillOutQuestionnaireComponent } from './fill-out-questionnaire/fill-out-questionnaire.component';
import { FreeTextQuestionComponent } from './questions/free-text-question/free-text-question.component';


@NgModule({
  declarations: [NewQuestionnaireComponent, FillOutQuestionnaireComponent, FreeTextQuestionComponent],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule,
    ReactiveFormsModule
  ]
})
export class QuestionnaireModule { }
