import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Map } from 'immutable';


@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = environment.apiBaseUrl + '/quests/quest';
  }

  save(questionnaireState: Map<string, any>) {
    this.http.put(this.url, questionnaireState).subscribe(res => console.log(res));
  }
}
