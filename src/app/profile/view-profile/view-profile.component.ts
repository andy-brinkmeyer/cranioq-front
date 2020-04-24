import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthStorageService } from '../../auth/services/auth-storage.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  authUserID = this.authStorageService.userID;
  details;
  id;


  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private authStorageService: AuthStorageService
    ) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.details = data.profile;
    });
    this.route.paramMap.subscribe(params => {
      this.id = params.get('userid'); });
    }


  goToPage() {
    this.router.navigate(['/edit-profile', this.authUserID]).then();
  }

}
