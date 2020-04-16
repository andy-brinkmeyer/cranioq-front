import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-parent-landing',
  templateUrl: './parent-landing.component.html',
  styleUrls: ['./parent-landing.component.css']
})
export class ParentLandingComponent implements OnInit {
  accessIDForm;
  displayMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
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
    this.router.navigate(['guardian/' + formData.accessID]);
  }

}
