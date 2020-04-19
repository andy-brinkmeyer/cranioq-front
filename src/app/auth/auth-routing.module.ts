import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthGuard} from './guards/auth.guard';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {ChangePasswordComponent} from './change-password/change-password.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'change-password', component: ChangePasswordComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
