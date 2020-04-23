import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GetQDetailsService } from './get-q-details.service';

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
    private getQDetailsService: GetQDetailsService,
  ) {
  }

  ngOnInit() {
    this.getQDetailsService.getQDetails().subscribe((data) => {
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

  goToPage(data) {
    this.router.navigate(['/questionnaire', data.id]).then();
  }

}
