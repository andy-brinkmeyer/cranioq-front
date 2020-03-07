import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FillOutQuestionnaireService {
  templatesURL: string;

  constructor() {
    this.templatesURL = environment.apiBaseUrl + '/quests/templates/';
  }
}
