import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetDetailsService {
  profileUrl;
   /*put user id in angular route*/

  constructor(private http: HttpClient,
    private router: Router) {
      this.profileUrl = environment.apiBaseUrl + '/user/';
     }

  getDetails(id){
    this.profileUrl = this.profileUrl + id
    return this.http.get(this.profileUrl)

  }

}