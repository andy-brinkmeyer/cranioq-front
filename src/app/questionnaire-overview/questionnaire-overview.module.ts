import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireOverviewRoutingModule } from './questionnaire-overview-routing.module';
import { QuestionnaireOverviewComponent } from './questionnaire-overview.component';

// test questionnaire data 
import {questionnaires} from '../questionnaires';



@NgModule({
  declarations: [QuestionnaireOverviewComponent],
  imports: [
    CommonModule,
    QuestionnaireOverviewRoutingModule
  ]
})
export class QuestionnaireOverviewModule { }
