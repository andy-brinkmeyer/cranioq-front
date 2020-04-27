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
  pageNum: number;
  total: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public authStorageService: AuthStorageService,
  ) {
    this.loading = false;
    this.pageNum = 1;
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
    this.QDetails = data.questionnaireOverview;
    this.total = this.QDetails.length();
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

  goToNext() {
    this.pageNum++;
    this.router.navigate(['/questionnaire-overview', this.pageNum]).then();
  }

  goToPrev() {
// put if statement to prevent it from going <1 
    this.pageNum--;
    this.router.navigate(['/questionnaire-overview', this.pageNum]).then() ;
  }


}
