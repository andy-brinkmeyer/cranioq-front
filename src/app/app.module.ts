import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { QuestionnaireModule } from './questionnaire/questionnaire.module';

import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
