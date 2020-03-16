import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { GetDetailsService} from '../get-details.service';
import { AuthStorageService } from '../../auth/services/auth-storage.service';
import { EditProfileService } from '../edit-profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  profileForm;
  auth_userid;
  details;
  displayMessage;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private getDetailsService: GetDetailsService,
    private authStorageService: AuthStorageService,
    private editProfileService: EditProfileService
    ) {
      this.auth_userid = this.authStorageService.userID;
      this.profileForm = this.formBuilder.group({
        first_name: ['', Validators.compose([Validators.required])],
        last_name: ['',  Validators.compose([Validators.required])],
        email: ['',  Validators.compose([Validators.required])],
        clinic_name: ['',  Validators.compose([Validators.required])],
        clinic_address: ['',  Validators.compose([Validators.required])],
        clinic_postcode: ['',  Validators.compose([Validators.required])]
        });
      this.displayMessage = ''
   }

  ngOnInit(){
    this.getDetailsService.getDetails(this.auth_userid).subscribe(data => {
      this.details = data;
      this.patchValues()
    });
  }


  patchValues(){
    this.profileForm.patchValue({
      first_name: this.details.first_name,
      last_name: this.details.last_name,
      email: this.details.email,
      clinic_name: this.details.clinic_name,
      clinic_address: this.details.clinic_address,
      clinic_postcode: this.details.clinic_postcode
  });
  }

  onSubmit(profileData) {
    if (this.profileForm.valid) {
      this.editProfileService.editProfile(this.auth_userid, profileData).subscribe(message => {
        this.displayMessage = message['displayable_message'];
        this.router.navigate(['/edit-profile']);
      });
    }
  }
}