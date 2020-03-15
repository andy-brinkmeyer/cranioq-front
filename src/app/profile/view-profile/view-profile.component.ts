import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
  id;

  constructor( private route: ActivatedRoute,
    private router: Router,
    private getDetailsService: GetDetailsService,
    private authStorageService: AuthStorageService,) {
      
      this.id = this.route.snapshot.paramMap.get('userid');
    
      this.getDetailsService.getDetails(this.id).subscribe(data =>
        this.details = data);
      /*add observable and error catching!! Resolve guard*/

     }

  ngOnInit(){
  }


  goToPage()
  {
    this.router.navigate(['/edit-profile', this.auth_userid]);
  }

}
