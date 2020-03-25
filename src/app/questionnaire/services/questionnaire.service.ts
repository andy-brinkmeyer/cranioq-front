import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

import { Map } from 'immutable';

import { catchError, map } from 'rxjs/operators';
import {of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  url: string;
  redirectURL = '/dashboard';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.url = environment.apiBaseUrl + '/quests/quest';
  }

  save(questionnaireState: Map<string, any>) {
    return this.http.put(this.url, questionnaireState).pipe(
      map(() => {
        this.router.navigate([this.redirectURL]);
        return of('');
      }),
      catchError(error => {
        if (error.error instanceof ErrorEvent) {
          return of(error.error.message);
        } else {
          return of(error.error.error_message);
        }
      })
    );
  }
}
