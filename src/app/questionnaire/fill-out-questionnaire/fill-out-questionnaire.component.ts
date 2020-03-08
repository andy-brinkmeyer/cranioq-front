import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-fill-out-questionnaire',
  templateUrl: './fill-out-questionnaire.component.html',
  styleUrls: ['./fill-out-questionnaire.component.css']
})
export class FillOutQuestionnaireComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(template => console.log(template));
  }

  ngOnInit() {
  }
}
