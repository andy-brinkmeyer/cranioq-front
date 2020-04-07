import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  questionnairesUrl: string;
  listQs;

  constructor(private http: HttpClient,
    private router: Router) { }

  getQuestionnaires(id) {
    this.questionnairesUrl = environment.apiBaseUrl + '/user/'+id;
    return this.http.get(this.questionnairesUrl).pipe(
      map(res => {
        this.listQs = res
        if(!Array.isArray(this.listQs)) {
          return [this.listQs]    /* if one object/questionaire returned, convert to array for ngFor*/
       }  
        return this.listQs;}),
      catchError( error => {
        if (error.error instanceof ErrorEvent) {
          return of(error.error.message);
        } else {
          return of(error.error.error_message);
        }
      })); /*add observable*/
  }
  
}
