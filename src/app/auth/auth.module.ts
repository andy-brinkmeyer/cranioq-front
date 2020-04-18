import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [RegisterComponent, LoginComponent, LogoutComponent, ChangePasswordComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule
    ],
  exports: [
    RegisterComponent,
    LoginComponent
  ]
})
export class AuthModule { }
