import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { TokenService } from './token.service';

import { LoginResponse200 } from '../models/models';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl = environment.apiBaseUrl + '/auth/login';

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  login(loginData) {
    this.http.post<LoginResponse200>(this.loginUrl, loginData).subscribe( loginResponse => {
      this.tokenService.token = loginResponse.token;
    },
    errorResponse => {
      console.log(errorResponse.error);
    });
  }
}
