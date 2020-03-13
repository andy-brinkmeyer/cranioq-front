import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

import {QuestionnaireTemplate, QuestionTemplate} from '../models/templates';


@Component({
  selector: 'app-fill-out-questionnaire',
  templateUrl: './fill-out-questionnaire.component.html',
  styleUrls: ['./fill-out-questionnaire.component.css']
})
export class FillOutQuestionnaireComponent implements OnInit {
  categories: Map<string, string>;
  categoryKeys: Array<string>;
  currentPage: number;
  currentQuestions: BehaviorSubject<Array<QuestionTemplate>>;

  constructor(private route: ActivatedRoute) {
    this.categories = new Map();
    this.categoryKeys = [];
    this.currentPage = 0;
    this.route.data.subscribe((data: {template: QuestionnaireTemplate}) => {
      data.template.questions.forEach(question => {
        if (question.category in this.categories) {
          this.categories[question.category].push(question);
        } else {
          this.categories[question.category] = [question];
        }
      });
      this.categoryKeys = Object.keys(this.categories);
      this.currentQuestions = new BehaviorSubject<Array<QuestionTemplate>>(this.categories[this.categoryKeys[this.currentPage]]);
    });
  }

  ngOnInit() {
  }

  previousPage() {
    if (this.currentPage <= 0) {
      return;
    }
    this.currentPage -= 1;
    this.currentQuestions.next(this.categories[this.categoryKeys[this.currentPage]]);
  }

  nextPage() {
    if (this.currentPage >= this.categoryKeys.length - 1) {
      return;
    }
    this.currentPage += 1;
    this.currentQuestions.next(this.categories[this.categoryKeys[this.currentPage]]);
  }
}
