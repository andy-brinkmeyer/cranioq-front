import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { QuestionnaireTemplate, TemplateInformation } from '../models/templates';


@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  templatesURL = environment.apiBaseUrl + '/quests/templates';

  constructor(private http: HttpClient) { }

    getTemplate(templateID: number | {}): Observable<QuestionnaireTemplate> {
    return this.http.get<QuestionnaireTemplate>(this.templatesURL + '/' + templateID);
  }

  getTemplates(): Observable<Array<TemplateInformation>> {
    return this.http.get<Array<TemplateInformation>>(this.templatesURL);
  }
}
