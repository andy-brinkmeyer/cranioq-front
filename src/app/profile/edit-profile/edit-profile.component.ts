import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { GetDetailsService} from '../get-details.service';
import { AuthStorageService } from '../../auth/services/auth-storage.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  profileForm;
  auth_userid = this.authStorageService.userID;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private getDetailsService: GetDetailsService,
    private authStorageService: AuthStorageService,) {
    this.profileForm = formBuilder.group({
      fname: '',
      lname: '',
      address1: '',
      address2: '',
      city: '',
      postcode: ''
    });
    this.route.snapshot.paramMap.get('userid');
   }

  ngOnInit(): void {
  }

  onSubmit(profileData) {
    this.profileForm.reset();
  }

}
