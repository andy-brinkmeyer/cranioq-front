import { Component, Input, OnInit } from '@angular/core';

import { QuestionTemplate } from '../../models/templates';
import { QuestionnaireStore } from '../../stores/questionnaire-store.service';


@Component({
  selector: 'app-checkbox-question',
  templateUrl: './checkbox-question.component.html',
  styleUrls: ['./checkbox-question.component.css']
})
export class CheckboxQuestionComponent implements OnInit {
  @Input() question: QuestionTemplate;
  @Input() completed: boolean;
  currentAnswer: Array<string>;

  constructor(
    private questionnaireStore: QuestionnaireStore
  ) { }

  ngOnInit() {
    this.currentAnswer = this.questionnaireStore.stateSnapshot.get('answers')[this.question.id];
    if ( this.currentAnswer === undefined ) {
      this.currentAnswer = [];
    }
  }

  isChecked(answer: string): boolean {
    return this.currentAnswer.includes(answer);
  }

  onChange(event) {
    const questionID = this.question.id;
    const checked = event.target.checked;
    const parent = event.target.parentNode;
    const answer = parent.innerText;
    const answerIndex = this.currentAnswer.indexOf(answer);
    if (checked && answerIndex < 0) {
      this.currentAnswer.push(answer);
      this.questionnaireStore.setAnswer(questionID, this.currentAnswer);
    } else if (!checked && answerIndex > -1) {
      this.currentAnswer.splice(answerIndex, 1);
      this.questionnaireStore.setAnswer(questionID, this.currentAnswer);
    }
  }

}
