/* Adapted the following to develop notifications:
https://stackoverflow.com/questions/44947551/angular2-4-refresh-data-realtime */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {AuthStorageService} from '../auth/services/auth-storage.service';

import { NotificationsService } from './notifications.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<any> = new Subject();
  authUserID = this.authStorageService.userID;
  role = this.authStorageService.role;
  total = 0;
  listQs: any;
  listNotify: any;
  interval: any;
  homeLink: string;
  pageNum: number;
  totalPgs = 0;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public authStorageService: AuthStorageService,
              private notificationsService: NotificationsService) {

              this.pageNum = 1;
               }

  ngOnInit() {
    if (this.authStorageService.isLoggedIn && this.authStorageService.role !== 'anon') {
      this.refreshData();
      if ( this.interval ) {
          clearInterval(this.interval);
      }
      this.interval = setInterval(() => {
          this.refreshData();
      }, 1000);

      this.notificationsService.data$.pipe(takeUntil(this.unsubscribe))
      .subscribe(data => {
          this.listQs = data;
          if ( Array.isArray(this.listQs) && this.listQs.length ) {
            this.total = this.listQs.length;
            if (this.total % 10 === 0) {
              this.totalPgs = this.total /  10;
            } else {
              this.totalPgs = ((this.total - (this.total % 10)) /  10) + 1 ;
            }
          }
          if ( Array.isArray(this.listQs) && !this.listQs.length ) {
            this.total = 0;
            this.totalPgs = 0;
          }
          if ( !Array.isArray(this.listQs) ) {
            this.total = 0;
            this.totalPgs = 0;
          }
          this.showNotify();
        });
    }
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    clearInterval(this.interval);
    }

  refreshData() {
    this.notificationsService.updateData()
        .pipe(takeUntil(this.unsubscribe))
          .subscribe();
    }

  showNotify() {
    if (this.listQs.length > 10) {
      this.listNotify = this.listQs.slice(10 * (this.pageNum - 1), (10 * this.pageNum));
    } else {
      this.listNotify = this.listQs.slice(10 * (this.pageNum - 1), this.listQs.length);
      }
  }

  dismiss($event, id) {
    $event.stopPropagation();
    $event.preventDefault();
    this.notificationsService.remove(id).subscribe();
    this.refreshData();
  }

  goToNext($event) {
    $event.stopPropagation();
    if (this.pageNum < this.totalPgs) {
      this.pageNum++;
      if (this.listQs.length >= this.pageNum * 10) {
        this.listNotify = this.listQs.slice(10 * (this.pageNum - 1), (10 * this.pageNum));
      } else {
        this.listNotify = this.listQs.slice(10 * (this.pageNum - 1), this.listQs.length);
      }
    }
  }

  goToPrev($event) {
    $event.stopPropagation();
    if (this.pageNum > 1) {
      this.pageNum--;
    } else {this.pageNum = 1;
    }
    if (this.listQs.length >= this.pageNum * 10) {
      this.listNotify = this.listQs.slice(10 * (this.pageNum - 1), (10 * this.pageNum));
    } else {
      this.listNotify = this.listQs.slice(10 * (this.pageNum - 1), this.listQs.length);
    }
  }

}
