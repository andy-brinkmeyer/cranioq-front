import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import {QuestionTemplate} from '../../models/templates';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() questions: Observable<Array<QuestionTemplate>>;
  freeTextQuestions: Array<QuestionTemplate>;
  checkboxQuestions: Array<QuestionTemplate>;
  radioQuestions: Array<QuestionTemplate>;

  constructor() {
    this.freeTextQuestions = [];
    this.checkboxQuestions = [];
    this.radioQuestions = [];
  }

  ngOnInit() {
    this.questions.subscribe(questionsArray => {
      this.freeTextQuestions = [];
      this.checkboxQuestions = [];
      this.radioQuestions = [];
      questionsArray.forEach(question => {
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

}
