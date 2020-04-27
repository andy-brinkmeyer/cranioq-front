import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// import { GetQDetailsService } from './get-q-details.service';
import {AuthStorageService} from '../auth/services/auth-storage.service';


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
  role = this.authStorageService.role;
  loading: boolean;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public authStorageService: AuthStorageService,
  ) {
    this.loading = false;
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
    this.QDetails = data.questionnaireOverview;
    });
  }

// getDetails(data): void {
//   if (JSON.stringify(data) === '[]') {
//     alert('Awaiting for review by specialist');
//   } else {
//     alert(data);
//   }
// }

  goToPage(data) {
    this.router.navigate(['/questionnaire', data.id]).then();
  }

}