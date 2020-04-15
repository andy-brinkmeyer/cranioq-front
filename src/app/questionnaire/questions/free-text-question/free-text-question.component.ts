import {Component, Input, OnInit} from '@angular/core';

import { Question } from '../../models/questionnaire';
import { QuestionnaireStore } from '../../stores/questionnaire-store.service';

@Component({
  selector: 'app-free-text-question',
  templateUrl: './free-text-question.component.html',
  styleUrls: ['./free-text-question.component.css']
})
export class FreeTextQuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() completed: boolean;
  answer = '';

  constructor(private questionnaireStore: QuestionnaireStore) { }

  ngOnInit() {
    if (this.questionnaireStore.stateSnapshot.get('answers')[this.question.id] !== undefined) {
      this.answer = this.questionnaireStore.stateSnapshot.get('answers')[this.question.id][0];
    }
  }

  onChange(event) {
    const questionID = parseInt(event.target.getAttribute('questionID'), 10);
    const answer = event.target.value;
    this.questionnaireStore.setAnswer(questionID, [answer]);
  }
}
