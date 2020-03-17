import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireOverviewRoutingModule } from './questionnaire-overview-routing.module';
import { QuestionnaireOverviewComponent } from './questionnaire-overview.component';


@NgModule({
  declarations: [QuestionnaireOverviewComponent],
  imports: [
    CommonModule,
    QuestionnaireOverviewRoutingModule
  ]
})
export class QuestionnaireOverviewModule { }
