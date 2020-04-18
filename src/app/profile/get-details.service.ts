import { Injectable } from '@angular/core';
// copy and paste below 5 stuff 
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
// copy and paste above

import { GetUserResponse200 } from './models/models'

@Injectable({
  providedIn: 'root'
})
export class GetDetailsService {
  profileUrl: string;
  details;

  // copy past constructor bit below 
  constructor(private http: HttpClient,
    private router: Router) {
     }

    //  green stuff below can be ignored - siobhan added that for her observable 
    // map res means mapping response to 'details' and then return details.. i can copy that (ofc change variabnle names etc)
  getDetails(id): Observable<object>{
    this.profileUrl = environment.apiBaseUrl + '/user/'+id;
    return this.http.get<GetUserResponse200>(this.profileUrl).pipe(
      map(res => {
        this.details = res
        return this.details;}),
      catchError( error => {
        if (error.error instanceof ErrorEvent) {
          return of(error.error.message);
        } else {
          return of(error.error.error_message);
        }
      }));

  }

}