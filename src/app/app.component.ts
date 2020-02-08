import { Component } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cranioq-front';
  route: string;

  constructor(private router: Router ) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((navEnd: NavigationEnd) => {
      this.route = navEnd.urlAfterRedirects;
    });
  }
}
