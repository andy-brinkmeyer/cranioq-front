import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [LoginComponent, LogoutComponent, ChangePasswordComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule
    ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }
