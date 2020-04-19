import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import { AuthStorageService } from './auth-storage.service';

import { LoginResponse200, LoginData } from '../models/models';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl: string;
  redirectUrl: string;
  verifyUrl: string;
  changePasswordURL: string;

  constructor(
    private http: HttpClient,
    private authStorageService: AuthStorageService,
    private router: Router
  ) {
    this.loginUrl = environment.apiBaseUrl + '/auth/login';
    this.verifyUrl = environment.apiBaseUrl + '/auth/verify';
    this.changePasswordURL = environment.apiBaseUrl + '/auth/change-password';
    this.redirectUrl = '/dashboard';
  }

  login(loginData: LoginData): Observable<string> {
    return this.http.post<LoginResponse200>(this.loginUrl, loginData).pipe(
      map(res => {
        this.authStorageService.token = res.token;
        this.authStorageService.role = res.role;
        this.authStorageService.userID = res.id;
        this.authStorageService.isLoggedIn = true;
        this.router.navigate([this.redirectUrl]);
        return '';
      }),
      catchError( error => {
      if (error.error instanceof ErrorEvent) {
        return of(error.error.message);
      } else {
        return of(error.error.error_message);
      }
    }));
  }

  logout() {
    this.authStorageService.logout();
  }

  changePassword(data) {
    return this.http.post(this.changePasswordURL, data).pipe(
      map(() => {
        return '';
      }),
      catchError( error => {
        if (error.error instanceof ErrorEvent) {
          return throwError('An error occurred. Please try again later.');
        } else {
          return throwError(error.error.error_message);
        }
      }));
  }
}
