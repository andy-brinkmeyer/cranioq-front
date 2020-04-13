import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { VerifyResponse } from '../models/models';


const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Token ' + window.localStorage.getItem('token')
  })
};


@Injectable({
  providedIn: 'root'
})
export class AuthStorageService  {
  localStore: Storage;
  isLoggedIn: boolean;

  verifyUrl = environment.apiBaseUrl + '/auth/verify';

  private http: HttpClient;

  constructor(private handler: HttpBackend) {
    this.http = new HttpClient(handler);
    this.localStore = window.localStorage;
    this.isLoggedIn = this.token !== '';
    if (this.isLoggedIn) {
      this.verify();
    }
  }

  set token(token: string) {
    this.localStore.setItem('token', token);
  }

  get token() {
    const token = this.localStore.getItem('token');
    if (token === null) {
      return '';
    } else {
      return token;
    }
  }

  set userID(userID: number) {
    this.localStore.setItem('userID', userID.toString(10));
  }

  get userID() {
    const userID = this.localStore.getItem('userID');
    if (userID === null) {
      return -1;
    } else {
      return parseInt(userID, 10);
    }
  }

  set role(role: string) {
    this.localStore.setItem('role', role);
  }

  get role() {
    const role = this.localStore.getItem('role');
    if (role === null) {
      return 'anon';
    } else {
      return role;
    }
  }

  verify() {
    this.http.get<VerifyResponse>(this.verifyUrl, httpOptions).subscribe(res => {
      this.isLoggedIn = true;
      this.userID = res.id;
      this.role = res.role;
    },
      () => {
      this.logout();
    });
  }

  logout() {
    this.localStore.removeItem('token');
    this.localStore.removeItem('userID');
    this.localStore.removeItem('role');
    this.isLoggedIn = false;
  }

}
