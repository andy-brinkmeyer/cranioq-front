import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionnaireOverviewComponent } from './questionnaire-overview.component';
import { QuestionnaireOverviewResolveService } from './questionnaire-overview-resolve.service';
import { AuthGuard } from '../auth/guards/auth.guard';


const routes: Routes = [
  { path: 'questionnaire-overview', component: QuestionnaireOverviewComponent, canActivate: [AuthGuard],
    resolve: {questionnaireOverview: QuestionnaireOverviewResolveService}, runGuardsAndResolvers: 'paramsOrQueryParamsChange'}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [QuestionnaireOverviewResolveService]
})
export class QuestionnaireOverviewRoutingModule { }
