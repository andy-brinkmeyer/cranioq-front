import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { GetQResponse200 } from './models/models'

@Injectable({
  providedIn: 'root'
})
export class GetQDetailsService {

  questionnaireUrl: string;
  QDetails; 

  constructor(private http: HttpClient) { }

  // for object, put 'object[]' or 'any[]' to get a dictionary of the questonnare info when i do it
  getQDetails(): Observable<object[]>{
    this.questionnaireUrl = environment.apiBaseUrl + '/quests/';
    return this.http.get<GetQResponse200>(this.questionnaireUrl).pipe(
      map(res => {
        this.QDetails = res
        return this.QDetails;}),
      catchError( error => {
        if (error.error instanceof ErrorEvent) {
          return of(error.error.message);
        } else {
          return of(error.error.error_message);
        }
      }));
      
  }

}
