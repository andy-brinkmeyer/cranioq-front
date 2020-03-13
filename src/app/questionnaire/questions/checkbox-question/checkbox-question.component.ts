import { Component, Input, OnInit } from '@angular/core';

import { QuestionTemplate } from '../../models/templates';


@Component({
  selector: 'app-checkbox-question',
  templateUrl: './checkbox-question.component.html',
  styleUrls: ['./checkbox-question.component.css']
})
export class CheckboxQuestionComponent implements OnInit {
  @Input() question: QuestionTemplate;

  constructor() { }

  ngOnInit() {
  }

}
