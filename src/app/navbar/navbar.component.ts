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

  constructor(private route: ActivatedRoute,
    private router: Router,
    public authStorageService: AuthStorageService,
    private notificationsService: NotificationsService,
    ) {}

  ngOnInit() {
    this.notificationsService.getQuestionnaires(this.auth_userid).subscribe(data =>{
      this.listQs = data;
      this.total = this.countQs()
    });
    }

  countQs() {
    let count = 0;
    for (let questionnaire of this.listQs){
      if (this.role == 'gp'){
        if (questionnaire.id === this.auth_userid){
          count++;
        }
      }
      else{
        count++;
      }
    }
    return count;

  }

}
