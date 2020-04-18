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
  notificationsUrl: string;
  private notify: BehaviorSubject<any[]> = new BehaviorSubject([]);
  data$: Observable<any[]> = this.notify.asObservable();

  constructor(private http: HttpClient,
    private router: Router) {
      this.notificationsUrl = environment.apiBaseUrl + '/quests/notify';
     }

  updateData(): Observable<any>  {
      return this.getQuestionnaires().pipe(tap((data: any[]) => {
          this.notify.next(data);
      }));
  }

  getQuestionnaires(): Observable<any> {
    return this.http.get<NotificationsResponse200>(this.notificationsUrl).pipe(
      map((response) => {
        let data = response;
        return data;}));
  }

  remove(id) {
    let dismissNotification = {'dismiss': true};
    let url = this.notificationsUrl + '/' + id
    return this.http.put(url, dismissNotification);
  }
  
}


/* Used the following to develop notifications: 
https://stackoverflow.com/questions/44947551/angular2-4-refresh-data-realtime */