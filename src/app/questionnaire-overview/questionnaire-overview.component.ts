import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GetQDetailsService } from './get-q-details.service';
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
  pgSize: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public authStorageService: AuthStorageService,
    public getQDetailsService: GetQDetailsService
  ) {
    this.loading = false;
    this.pageNum = 1;
    this.pgSize = 50;
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
    this.QDetails = data.questionnaireOverview;
    this.total = this.QDetails.length;
    });
}

  goToPage(data) {
    this.router.navigate(['/questionnaire', data.id]).then();
  }

  goToNext() {
    this.pageNum++;
    this.getQDetailsService.getQDetails(this.pageNum, this.pgSize).subscribe((data) => {
      this.QDetails = data;
      this.total = this.QDetails.length;
    });

  }

  goToPrev() {
    this.pageNum--;
    this.getQDetailsService.getQDetails(this.pageNum, this.pgSize).subscribe((data) => {
      this.QDetails = data;
      this.total = this.QDetails.length;
  });
}
}
