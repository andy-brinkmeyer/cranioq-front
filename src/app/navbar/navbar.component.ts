import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {AuthStorageService} from '../auth/services/auth-storage.service';

import { NotificationsService } from './notifications.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  auth_userid = this.authStorageService.userID;
  role = this.authStorageService.role;
  total: number = 0;
  listQs;
  notify;

  constructor(private route: ActivatedRoute,
    private router: Router,
    public authStorageService: AuthStorageService,
    private notificationsService: NotificationsService,
    ) {}

  ngOnInit() {
    this.notificationsService.getQuestionnaires().subscribe(data =>{
      this.listQs = data;
      if (this.role == 'gp' && Array.isArray(this.listQs) && this.listQs.length){
        this.notify = this.notifyGP();
        this.total = this.notify.length;
      }
      if (this.role == 'specialist' && Array.isArray(this.listQs) && this.listQs.length) {
        this.notify = this.notifySpecialist();
        this.total = this.notify.length;
      }
      if (Array.isArray(this.listQs) && !this.listQs.length) {
        this.total = 0;
      }
      if (!Array.isArray(this.listQs)){
        this.total = 0;
      }
    });
  }

  notifyGP() {
    let questionnaires = [];
    for (let questionnaire of this.listQs) {
      if (questionnaire.completed_gp && questionnaire.completed_guardian && questionnaire.review.length) {
        questionnaires.push(questionnaire)
      }
    }
    return questionnaires
  }

  notifySpecialist() {
    let questionnaires = [];
    for (let questionnaire of this.listQs) {
      if (questionnaire.completed_gp && questionnaire.completed_guardian && !questionnaire.review.length) {
        questionnaires.push(questionnaire)
      }
    }
    return questionnaires
  }



}