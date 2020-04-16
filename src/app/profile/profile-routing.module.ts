import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ProfileResolveService } from './profile-resolve.service'

const routes: Routes = [{ path: 'view-profile/:userid', component: ViewProfileComponent, resolve: {profile: ProfileResolveService} }, 
{ path: 'edit-profile', component: EditProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProfileResolveService]
})
export class ProfileRoutingModule { }
