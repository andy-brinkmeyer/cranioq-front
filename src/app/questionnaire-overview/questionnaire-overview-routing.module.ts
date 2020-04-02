import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionnaireOverviewComponent } from './questionnaire-overview.component';


const routes: Routes = [{ path: 'questionnaire-overview', component: QuestionnaireOverviewComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnaireOverviewRoutingModule { }
