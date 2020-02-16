import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService  {
  token: string;
  userID: number;
  role: string;

  constructor() {
    this.token = '';
    this.userID = -1;
    this.role = 'anon';
  }

}
