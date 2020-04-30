import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireOverviewRoutingModule } from './questionnaire-overview-routing.module';
import { QuestionnaireOverviewComponent } from './questionnaire-overview.component';
import { ReviewstatusPipe } from './reviewstatus.pipe';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { QuestionnaireDetailsComponent } from './questionnaire-details/questionnaire-details.component';




@NgModule({
  declarations: [QuestionnaireOverviewComponent, ReviewstatusPipe, FilterPipe, QuestionnaireDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    QuestionnaireOverviewRoutingModule],
  // do i need exports below?
    exports: [
    FilterPipe
  ]
})
export class QuestionnaireOverviewModule { }
