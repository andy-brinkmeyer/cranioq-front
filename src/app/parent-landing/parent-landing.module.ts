import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentLandingRoutingModule } from './parent-landing-routing.module';
import { ParentLandingComponent } from './parent-landing.component';


@NgModule({
  declarations: [ParentLandingComponent],
  imports: [
    CommonModule,
    ParentLandingRoutingModule
  ]
})
export class ParentLandingModule { }
