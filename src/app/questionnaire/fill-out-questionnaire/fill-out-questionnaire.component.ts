import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { QuestionnaireTemplate } from '../models/templates';


@Component({
  selector: 'app-fill-out-questionnaire',
  templateUrl: './fill-out-questionnaire.component.html',
  styleUrls: ['./fill-out-questionnaire.component.css']
})
export class FillOutQuestionnaireComponent implements OnInit {
  freeTextQuestions = [];
  checkboxQuestions = [];
  radioQuestions = [];

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: {template: QuestionnaireTemplate}) => {
      data.template.questions.forEach(question => {
        if (question.type === 'free_text') {
          this.freeTextQuestions.push(question);
        } else if (question.type === 'checkbox') {
          this.checkboxQuestions.push(question);
        } else if (question.type === 'radio') {
          this.radioQuestions.push(question);
        }
      });
    });
  }

  ngOnInit() {
  }
}
