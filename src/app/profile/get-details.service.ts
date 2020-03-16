import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { GetUserResponse200 } from './models/models'

@Injectable({
  providedIn: 'root'
})
export class GetDetailsService {
  profileUrl: string;
  details;

  constructor(private http: HttpClient,
    private router: Router) {
     }

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