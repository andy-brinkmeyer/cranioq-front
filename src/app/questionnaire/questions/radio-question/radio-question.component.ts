import { Component, Input, OnInit } from '@angular/core';

import { QuestionTemplate } from '../../models/templates';


@Component({
  selector: 'app-radio-question',
  templateUrl: './radio-question.component.html',
  styleUrls: ['./radio-question.component.css']
})
export class RadioQuestionComponent implements OnInit {
  @Input() question: QuestionTemplate;

  constructor() { }

  ngOnInit() {
  }

}
