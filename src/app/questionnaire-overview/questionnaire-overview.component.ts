import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// import important services i create e.g. getqdetailsservice
import { GetQDetailsService } from '../questionnaire-overview/get-q-details.service';
import { range } from 'rxjs';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-questionnaire-overview',
  templateUrl: './questionnaire-overview.component.html',
  styleUrls: ['./questionnaire-overview.component.css']
})

export class QuestionnaireOverviewComponent implements OnInit {
// declare variables here
  QDetails;
  PendingQs;
  searchString: string;
  reviewedArray: any[];
  pendingArray: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private GetQDetailsService: GetQDetailsService,
    // need to put routing and services here 
  ) { 
    // instatitate variables here 
  }

  ngOnInit() {
    this.GetQDetailsService.getQDetails().subscribe((data) => {
    this.QDetails = data;
    console.log('data: ', this.QDetails);
    });
  }

getDetails(data): void {
  if (JSON.stringify(data) === '[]') {
    alert('Awaiting for review by specialist');
  } else {
    alert(data);
  }
}

}
