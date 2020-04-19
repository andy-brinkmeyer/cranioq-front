import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireOverviewRoutingModule } from './questionnaire-overview-routing.module';
import { QuestionnaireOverviewComponent } from './questionnaire-overview.component';
import { ReviewstatusPipe } from './reviewstatus.pipe';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';


// test questionnaire data 
// import {questionnaires} from '../questionnaires';



@NgModule({
  declarations: [QuestionnaireOverviewComponent, ReviewstatusPipe, FilterPipe],
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
