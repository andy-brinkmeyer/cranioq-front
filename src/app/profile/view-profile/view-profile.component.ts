import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthStorageService } from '../../auth/services/auth-storage.service';

import { GetDetailsService} from '../get-details.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  auth_userid = this.authStorageService.userID; /*if userid = auth_userid, show edit button*/
  details;

  constructor(private router: Router, 
    private getDetailsService: GetDetailsService,
    private authStorageService: AuthStorageService,) {  
    this.getDetailsService.getDetails().subscribe(data =>
      this.details = data);
      /*add observable and error catching!! Resolve guard*/

     }

  ngOnInit(){
  }


  goToPage(pagename:string)
  {
    this.router.navigate([pagename]);
  }

}
