import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentLandingComponent } from './parent-landing/parent-landing.component';
import {FillOutQuestionnaireComponent} from '../questionnaire/fill-out-questionnaire/fill-out-questionnaire.component';
import {GuardianResolverService} from '../questionnaire/guards/guardian-resolver.service';


const routes: Routes = [
  { path: 'guardian', children: [
      { path: ':accessID', component: FillOutQuestionnaireComponent, resolve: { questionnaire: GuardianResolverService } },
      { path: '', component: ParentLandingComponent }
    ]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
