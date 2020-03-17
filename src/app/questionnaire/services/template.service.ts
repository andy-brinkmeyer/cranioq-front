import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { QuestionnaireTemplate } from '../models/templates';


@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  templatesURL: string;

  constructor(private http: HttpClient) {
    this.templatesURL = environment.apiBaseUrl + '/quests/templates/';
  }

    getTemplate(templateID: number | {}): Observable<QuestionnaireTemplate> {
    return this.http.get<QuestionnaireTemplate>(this.templatesURL + templateID);
  }
}
