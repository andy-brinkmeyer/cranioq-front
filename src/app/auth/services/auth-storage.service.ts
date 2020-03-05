import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AuthStorageService  {
  token: string;
  userID: number;
  role: string;
  isLoggedIn: boolean;

  constructor() {
    this.token = '';
    this.userID = -1;
    this.role = 'anon';
    this.isLoggedIn = false;
  }

}
