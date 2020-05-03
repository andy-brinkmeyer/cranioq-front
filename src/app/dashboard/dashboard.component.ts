import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { AuthStorageService } from '../auth/services/auth-storage.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loadingNew: boolean;
  loadingManage: boolean;

  constructor(
    private router: Router,
    public authStorageService: AuthStorageService
  ) {
    this.loadingNew = false;
    this.loadingManage = false;
  }

  ngOnInit() {
  }

  newQuestionnaire() {
    this.loadingNew = true;
    this.router.navigate(['questionnaires/new']).catch(() => this.loadingNew = false);
  }

  manageQuestionnaire() {
    this.loadingManage = true;
    this.router.navigate(['questionnaire-overview']).catch(() => this.loadingManage = false);
  }
}
