import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import { QuestionnaireStore } from '../stores/questionnaire-store.service';
import { NewQuestionnaireResponse201 } from '../models/responses';


@Injectable({
  providedIn: 'root'
})
export class NewQuestionnaireService {
  url: string;

  constructor(
    private http: HttpClient,
    private questionnaireStore: QuestionnaireStore) {
    this.url = environment.apiBaseUrl + '/quests/quest';
  }

  create(questData) {

    return this.http.post<NewQuestionnaireResponse201>(this.url, questData).pipe(
      map(res => {
        this.questionnaireStore.questionnaireID = res.questionnaire_id;
        return res.questionnaire_id;
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
