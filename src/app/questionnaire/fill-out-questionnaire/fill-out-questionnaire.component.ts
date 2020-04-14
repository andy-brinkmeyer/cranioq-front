import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

import { QuestionTemplate } from '../models/templates';
import { Questionnaire, Question } from '../models/questionnaire';
import { QuestionnaireStore } from '../stores/questionnaire-store.service';
import { QuestionnaireService } from '../services/questionnaire.service';
import { AuthStorageService } from '../../auth/services/auth-storage.service';


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
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private questionnaireStore: QuestionnaireStore,
    private questionnaireService: QuestionnaireService,
    private authStorageService: AuthStorageService
  ) {
    this.categories = new Map();
    this.categoryKeys = [];
    this.currentPage = 0;

    this.questionnaireStore.reset();

    const role = this.authStorageService.role;

    this.route.data.subscribe((data: { questionnaire: Questionnaire }) => {
      this.questionnaireStore.questionnaireID = data.questionnaire.id;
      this.questionnaireStore.accessID = data.questionnaire.access_id;
      data.questionnaire.answers.forEach(answer => this.questionnaireStore.setAnswer(answer.question_id, answer.answer));
      data.questionnaire.template.questions.forEach(question => {
        if ( role !== 'specialist' && role !== question.role ) {
          return;
        }
        if (question.category in this.categories) {
          this.categories[question.category].push(question);
        } else {
          this.categories[question.category] = [question];
        }
      });
      this.categoryKeys = Object.keys(this.categories);
      this.currentQuestions = new BehaviorSubject<Array<Question>>(this.categories[this.categoryKeys[this.currentPage]]);
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

  onSubmit() {
    const state = this.questionnaireStore.stateSnapshot;
    this.questionnaireService.save(state, true).subscribe(res => this.errorMessage = res);
  }

  onSave() {
    const state = this.questionnaireStore.stateSnapshot;
    this.questionnaireService.save(state, false).subscribe(res => this.errorMessage = res);
  }
}
