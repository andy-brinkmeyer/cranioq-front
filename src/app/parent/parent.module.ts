import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { ParentLandingComponent } from './parent-landing/parent-landing.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ParentLandingComponent],
    imports: [
        CommonModule,
        ParentRoutingModule,
        ReactiveFormsModule
    ]
})
export class ParentModule { }
