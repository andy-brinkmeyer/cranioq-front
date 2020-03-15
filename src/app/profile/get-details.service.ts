import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetDetailsService {
  profileUrl;

  constructor(private http: HttpClient,
    private router: Router) {
     }

  getDetails(id){
    this.profileUrl = environment.apiBaseUrl + '/user/'+id;
    return this.http.get(this.profileUrl)

  }

}