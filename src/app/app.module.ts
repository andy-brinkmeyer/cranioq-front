import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { QuestionnaireModule } from './questionnaire/questionnaire.module';
import { ParentModule } from './parent/parent.module';
import { PrivacyPolicyModule } from './privacy-policy/privacy-policy.module';
<<<<<<< HEAD
import { QuestionnaireOverviewModule } from './questionnaire-overview/questionnaire-overview.module';
=======
import { ProfileModule } from './profile/profile.module';
>>>>>>> 1ac996a2c0a3946f3a11ad3ea430eb661dea280a

import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';

import {TokenInterceptor} from './auth/interceptors/token.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    DashboardModule,
    QuestionnaireModule,
    ParentModule,
    PrivacyPolicyModule,
<<<<<<< HEAD
    QuestionnaireOverviewModule,
    FormsModule,
=======
    ProfileModule,
>>>>>>> 1ac996a2c0a3946f3a11ad3ea430eb661dea280a
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({ cookieName: 'csrftoken', headerName: 'X-CSRFToken' })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
