import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfileRoutingModule } from './profile-routing.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';


@NgModule({
  declarations: [EditProfileComponent, ViewProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
