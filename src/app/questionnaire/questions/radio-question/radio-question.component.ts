import { Component, Input, OnInit } from '@angular/core';

import { QuestionTemplate } from '../../models/templates';
import { QuestionnaireStore } from '../../stores/questionnaire-store.service';


@Component({
  selector: 'app-radio-question',
  templateUrl: './radio-question.component.html',
  styleUrls: ['./radio-question.component.css']
})
export class RadioQuestionComponent implements OnInit {
  @Input() question: QuestionTemplate;
  currentAnswer: string;

  constructor(
    private questionnaireStore: QuestionnaireStore
  ) { }

  ngOnInit() {
    const currentAnswers = this.questionnaireStore.stateSnapshot.get('answers')[this.question.id];
    if ( currentAnswers === undefined || currentAnswers.length < 1 ) {
      this.currentAnswer = '';
    } else {
      this.currentAnswer = currentAnswers[0];
    }
  }

  isChecked(answer: string): boolean {
    return answer === this.currentAnswer;
  }

  onChange(event) {
    const questionID = parseInt(event.target.getAttribute('questionID'), 10);
    const parent = event.target.parentNode;
    const answer = parent.innerText;
    this.questionnaireStore.setAnswer(questionID, [answer]);
  }
}
