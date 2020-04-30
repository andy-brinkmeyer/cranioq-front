import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { AuthStorageService } from '../auth/services/auth-storage.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loading: boolean;

  constructor(
    private router: Router,
    public authStorageService: AuthStorageService
  ) {
    this.loading = false;
  }

  ngOnInit() {
  }

  newQuestionnaire() {
    this.loading = true;
    this.router.navigate(['questionnaires/new']).catch(() => this.loading = false);
  }

  manageQuestionnaire() {
    this.loading = true;
    this.router.navigate(['questionnaire-overview']).catch(() => this.loading = false);
  }
}
