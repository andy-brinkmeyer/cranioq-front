import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

import { Map } from 'immutable';

import { catchError, map } from 'rxjs/operators';
import {Observable, of} from 'rxjs';

import { Questionnaire } from '../models/questionnaire';
import { AuthStorageService } from '../../auth/services/auth-storage.service';


@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  url = environment.apiBaseUrl + '/quests/quest';
  redirectURL = '/dashboard';

  constructor(
    private http: HttpClient,
    private router: Router,
    private authStorageService: AuthStorageService
  ) { }

  get(questionnaireID: number): Observable<Questionnaire> {
    return this.http.get<Questionnaire>(this.url + '/' + questionnaireID);
  }

  getByAccessID(accessID: string) {
    return this.http.get<Questionnaire>(this.url + '/' + accessID);
  }

  save(questionnaireState: Map<string, any>, completed: boolean) {
    questionnaireState = questionnaireState.set('completed', completed);
    let url: string;
    if ( this.authStorageService.role === 'anon' ) {
      url = this.url + '/' + questionnaireState.get('accessID');
    } else {
      url = this.url;
    }
    return this.http.put(url, questionnaireState).pipe(
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
