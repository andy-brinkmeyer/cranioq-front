import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import {tap} from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { NotificationsResponse200 } from './model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  questionnairesUrl: string;
  private notify: BehaviorSubject<any[]> = new BehaviorSubject([]);
  data$: Observable<any[]> = this.notify.asObservable();

  constructor(private http: HttpClient,
    private router: Router) { }

  updateData(): Observable<any[]>  {
      return this.getQuestionnaires().pipe(tap((data: any[]) => {
          this.notify.next(data);
      }));
  }

  getQuestionnaires(): Observable<any[]> {
    this.questionnairesUrl = environment.apiBaseUrl + '/quests/notify';
    return this.http.get<NotificationsResponse200>(this.questionnairesUrl).pipe(
      map((response) => {
        let data = response;
        return data;}),
      catchError( error => {
        if (error.error instanceof ErrorEvent) {
          return of(error.error.message);
        } else {
          return of(error.error.error_message);
        }
      })); /*check proper error catching*/
  }
  
}


/* Used the following to develop notifications: 
https://stackoverflow.com/questions/44947551/angular2-4-refresh-data-realtime */