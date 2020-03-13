import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetDetailsService {
  profileUrl;
  userid = 2; /*put user id in angular route*/

  constructor(private http: HttpClient,
    private router: Router) {
      this.profileUrl = environment.apiBaseUrl + '/user/' + this.userid;
     }

  getDetails(){
    return this.http.get(this.profileUrl)

  }

}