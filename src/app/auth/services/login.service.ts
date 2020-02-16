import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

import {Observable, of} from 'rxjs';

import { environment } from '../../../environments/environment';

import { StorageService } from './storage.service';

import { LoginResponse200, LoginData } from '../models/models';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl: string;
  isLoggedIn: boolean;
  redirectUrl: string;

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private router: Router
  ) {
    this.loginUrl = environment.apiBaseUrl + '/auth/login';
    this.isLoggedIn = false;
    this.redirectUrl = '/dashboard';
  }

  login(loginData: LoginData): Observable<string> {
    let returnString = '';

    this.http.post<LoginResponse200>(this.loginUrl, loginData).subscribe( loginResponse => {
      this.storageService.token = loginResponse.token;
      this.storageService.role = loginResponse.role;
      this.isLoggedIn = true;
      this.router.navigate([this.redirectUrl]);
    },
    error => {
      if (error.error instanceof ErrorEvent) {
        returnString = error.error.message;
      } else {
        returnString = error.error.errorMessage;
      }
    });
    return of(returnString);
  }
}
