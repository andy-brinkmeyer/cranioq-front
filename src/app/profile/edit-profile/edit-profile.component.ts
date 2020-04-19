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
  authUserID;
  details;
  displayMessage;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private getDetailsService: GetDetailsService,
    public authStorageService: AuthStorageService,
    private editProfileService: EditProfileService
    ) {
      this.authUserID = this.authStorageService.userID;
      this.profileForm = this.formBuilder.group({
        title: ['', [Validators.required]],
        first_name: ['', [Validators.required]],
        last_name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        clinic_name: ['', [Validators.required]],
        clinic_street: ['', [Validators.required]],
        clinic_city: ['', [Validators.required]],
        clinic_postcode: ['', [Validators.required]]
        });
      this.displayMessage = '';
   }

  ngOnInit() {
    this.getDetailsService.getDetails(this.authUserID).subscribe(data => {
      this.details = data;
      this.patchValues();
    });
  }


  patchValues() {
    this.profileForm.patchValue({
      title: this.details.title,
      first_name: this.details.first_name,
      last_name: this.details.last_name,
      email: this.details.email,
      clinic_name: this.details.clinic_name,
      clinic_street: this.details.clinic_street,
      clinic_city: this.details.clinic_city,
      clinic_postcode: this.details.clinic_postcode
  });
  }

  onSubmit(profileData) {
    if (this.profileForm.valid) {
      this.editProfileService.editProfile(this.authUserID, profileData).subscribe(message => {
        this.displayMessage = message;
        this.router.navigate(['/edit-profile']);
      });
    } else {
      this.displayMessage = 'One or more fields are empty.';
    }
  }
}