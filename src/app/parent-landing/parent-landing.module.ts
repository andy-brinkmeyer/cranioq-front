import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentLandingRoutingModule } from './parent-landing-routing.module';
import { ParentLandingComponent } from './parent-landing.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ParentLandingComponent],
    imports: [
        CommonModule,
        ParentLandingRoutingModule,
        ReactiveFormsModule
    ]
})
export class ParentLandingModule { }
