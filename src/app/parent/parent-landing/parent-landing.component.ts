import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-parent-landing',
  templateUrl: './parent-landing.component.html',
  styleUrls: ['./parent-landing.component.css']
})
export class ParentLandingComponent implements OnInit {
  accessIDForm;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.accessIDForm = formBuilder.group({
      accessID: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(formData) {
    this.router.navigate(['guardian/' + formData.accessID]);
  }

}
