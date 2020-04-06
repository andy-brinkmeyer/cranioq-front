import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {AuthStorageService} from '../auth/services/auth-storage.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  auth_userid = this.authStorageService.userID;

  constructor(public authStorageService: AuthStorageService,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
