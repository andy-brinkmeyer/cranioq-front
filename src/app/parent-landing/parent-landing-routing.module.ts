import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentLandingComponent } from './parent-landing.component';


const routes: Routes = [{ path: 'parent-landing', component: ParentLandingComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentLandingRoutingModule { }