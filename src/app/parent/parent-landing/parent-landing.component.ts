import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthStorageService } from '../../auth/services/auth-storage.service';


@Component({
  selector: 'app-parent-landing',
  templateUrl: './parent-landing.component.html',
  styleUrls: ['./parent-landing.component.css']
})
export class ParentLandingComponent implements OnInit {
  accessIDForm;
  displayMessage = '';
  starting: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authStorageService: AuthStorageService
  ) {
    this.authStorageService.logout();

    this.starting = false;

    this.accessIDForm = formBuilder.group({
      accessID: ''
    });
    this.route.paramMap.subscribe(params => {
      if ( params.get('error') === 'true' ) {
        this.displayMessage = 'The ID provided does not exist or is no longer valid.';
      } else {
        this.displayMessage = '';
      }
    } );
  }

  ngOnInit() {
  }

  onSubmit(formData) {
    this.starting = true;
    this.router.navigate(['guardian/' + formData.accessID]).then(() => this.starting = false).catch(() => this.starting = false);
  }

}
