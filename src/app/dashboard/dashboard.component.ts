import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loading: boolean;

  constructor(private router: Router) {
    this.loading = false;
  }

  ngOnInit() {
  }

  newQuestionnaire() {
    this.loading = true;
    this.router.navigate(['questionnaires/new']).catch(() => this.loading = false);
  }

  manageQuestionnaire() {
    this.router.navigate(['questionnaire-overview']).then();
  }
}
