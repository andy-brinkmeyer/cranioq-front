import {Component, Input, OnInit} from '@angular/core';

import { QuestionTemplate } from '../../models/templates';

@Component({
  selector: 'app-free-text-question',
  templateUrl: './free-text-question.component.html',
  styleUrls: ['./free-text-question.component.css']
})
export class FreeTextQuestionComponent implements OnInit {
  @Input() question: QuestionTemplate;

  constructor() { }

  ngOnInit() {
  }

}
