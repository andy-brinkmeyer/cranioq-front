import { Component, OnInit } from '@angular/core';

import {AuthStorageService} from '../auth/services/auth-storage.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authStorageService: AuthStorageService) { }

  ngOnInit() {
  }

}
