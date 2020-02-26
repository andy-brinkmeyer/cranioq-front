import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
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

  constructor(
    private http: HttpClient,
    private authStorageService: AuthStorageService,
    private router: Router
  ) {
    this.loginUrl = environment.apiBaseUrl + '/auth/login';
    this.redirectUrl = '/dashboard';
  }

  login(loginData: LoginData): Observable<string> {
    return this.http.post<LoginResponse200>(this.loginUrl, loginData).pipe(
      map(res => {
        this.authStorageService.token = res.token;
        this.authStorageService.role = res.role;
        this.router.navigate([this.redirectUrl]);
        return of('');
      }),
      catchError( error => {
      if (error.error instanceof ErrorEvent) {
        return of(error.error.message);
      } else {
        return of(error.error.errorMessage);
      }
    }));
  }

  logout() {
    this.authStorageService.token = '';
    this.authStorageService.userID = -1;
    this.authStorageService.role = 'anon';
  }
}
