import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil} from 'rxjs/operators';

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
  interval: any;
  homeLink: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public authStorageService: AuthStorageService,
              private notificationsService: NotificationsService) {
    if ( this.authStorageService.role === 'anon' ) {
      this.homeLink = '/guardian';
    } else {
      this.homeLink = '/dashboard';
    }
  }

  ngOnInit() {
    if (this.authStorageService.isLoggedIn) {
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
          }
          if ( Array.isArray(this.listQs) && !this.listQs.length ) {
            this.total = 0;
          }
          if ( !Array.isArray(this.listQs) ) {
            this.total = 0;
          }
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

  dismiss($event, id) {
    $event.stopPropagation();
    $event.preventDefault();
    this.notificationsService.remove(id).subscribe();
    this.refreshData();
  }
}
