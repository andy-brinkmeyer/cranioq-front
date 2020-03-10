import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GetDetailsService} from '../get-details.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  details = ['Dr Siobhan Hughes', 'River place Health Center', 'Essex Road', 'Islington', 'London', 'N1 2DE'];

  constructor(private router: Router, getDetailsService: GetDetailsService) { }

  ngOnInit(): void {
  }

  goToPage(pagename:string)
  {
    this.router.navigate([pagename]);
  }

}
