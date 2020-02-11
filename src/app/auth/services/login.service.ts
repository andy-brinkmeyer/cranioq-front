import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl = environment.apiBaseUrl + '/auth/login';

  constructor(private http: HttpClient) { }

  login(loginData) {
    this.http.post(this.loginUrl, loginData).subscribe( loginResponse => {
      console.log(loginResponse);
    });
  }
}
