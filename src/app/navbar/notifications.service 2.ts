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

  getQuestionnaires(): Observable<any> {
    this.questionnairesUrl = environment.apiBaseUrl + '/quests';
    return this.http.get<any>(this.questionnairesUrl).pipe(
      map(res => {
        this.listQs = res;
        return this.listQs;}),
      catchError( error => {
        if (error.error instanceof ErrorEvent) {
          return of(error.error.message);
        } else {
          return of(error.error.error_message);
        }
      })); /*add observable and check proper error catching*/
  }
  
}