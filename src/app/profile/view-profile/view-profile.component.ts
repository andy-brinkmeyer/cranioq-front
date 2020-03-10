import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  details = ['Dr Siobhan Hughes', 'River place Health Center', 'Essex Road', 'Islington', 'London', 'N1 2DE'];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPage(pagename:string)
  {
    this.router.navigate([pagename]);
  }

}
