import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AuthStorageService  {
  token: string;
  userID: number;
  role: string;

  constructor() {
    this.token = '';
    this.userID = -1;
    this.role = 'anon';
  }

  get isLoggedIn() {
    return this.token !== '';
  }

}
