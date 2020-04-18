import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { NewQuestionnaireComponent } from './new-questionnaire/new-questionnaire.component';
import { FillOutQuestionnaireComponent } from './fill-out-questionnaire/fill-out-questionnaire.component';
import { FreeTextQuestionComponent } from './questions/free-text-question/free-text-question.component';
import { RadioQuestionComponent } from './questions/radio-question/radio-question.component';
import { CheckboxQuestionComponent } from './questions/checkbox-question/checkbox-question.component';
import { CategoryComponent } from './questions/category/category.component';
import { PrintViewComponent } from './print-view/print-view.component';


@NgModule({
  declarations: [
    NewQuestionnaireComponent,
    FillOutQuestionnaireComponent,
    FreeTextQuestionComponent,
    RadioQuestionComponent,
    CheckboxQuestionComponent,
    CategoryComponent,
    PrintViewComponent],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule,
    ReactiveFormsModule
  ]
})
export class QuestionnaireModule { }
