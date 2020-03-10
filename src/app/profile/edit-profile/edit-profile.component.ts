import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  profileForm;

  constructor(private formBuilder: FormBuilder) {
    this.profileForm = formBuilder.group({
      fname: '',
      lname: '',
      address1: '',
      address2: '',
      city: '',
      postcode: ''
    });
   }

  ngOnInit(): void {
  }

  onSubmit(profileData) {
    this.profileForm.reset();
  }

}
