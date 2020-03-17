import {Component, Input, OnInit} from '@angular/core';

import { QuestionTemplate } from '../../models/templates';
import { QuestionnaireStore } from '../../stores/questionnaire-store.service';

@Component({
  selector: 'app-free-text-question',
  templateUrl: './free-text-question.component.html',
  styleUrls: ['./free-text-question.component.css']
})
export class FreeTextQuestionComponent implements OnInit {
  @Input() question: QuestionTemplate;

  constructor(private questionnaireStore: QuestionnaireStore) { }

  ngOnInit() {
  }

  onChange(event) {
    const questionID = event.target.getAttribute('questionID');
    const answer = event.target.value;
    this.questionnaireStore.setAnswer(questionID, [answer]);
  }
}
