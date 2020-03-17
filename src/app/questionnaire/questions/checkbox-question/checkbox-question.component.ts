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
  currentAnswers;

  constructor(
    private questionnaireStore: QuestionnaireStore
  ) {
    this.questionnaireStore.state.subscribe(state => this.currentAnswers = state.get('answers'));
  }

  ngOnInit() {
  }

  onChange(event) {
    const questionID = event.target.getAttribute('questionID');
    const checked = event.target.checked;
    const parent = event.target.parentNode;
    let currentAnswer = this.currentAnswers[questionID];
    const answer = parent.innerText;
    let answerIndex = -1;
    if (currentAnswer === undefined) {
      currentAnswer = [];
    } else {
      answerIndex = currentAnswer.indexOf(answer);
    }
    if (checked && answerIndex < 0) {
      currentAnswer.push(answer);
      this.questionnaireStore.setAnswer(questionID, currentAnswer);
    } else if (!checked && answerIndex > -1) {
      currentAnswer.splice(answerIndex, 1);
      this.questionnaireStore.setAnswer(questionID, currentAnswer);
    }
  }

}
