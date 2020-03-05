import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { NewQuestionnaireService } from '../services/new-questionnaire.service';


@Component({
  selector: 'app-new-questionnaire',
  templateUrl: './new-questionnaire.component.html',
  styleUrls: ['./new-questionnaire.component.css']
})
export class NewQuestionnaireComponent implements OnInit {
  newQuestionnaireForm;
  displayMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private newQuestionnaireService: NewQuestionnaireService
  ) {
    this.newQuestionnaireForm = formBuilder.group({
      email: ['', Validators.required],
      agreed: [false, Validators.requiredTrue],
      patient_id: ['', Validators.required]
    });
    this.displayMessage = '';
  }

  ngOnInit() {
  }

  onSubmit(formData) {
    if (this.newQuestionnaireForm.valid) {
      this.newQuestionnaireService.create(formData).subscribe(message => this.displayMessage = message);
    } else {
      this.displayMessage = 'One or more fields were left empty.';
    }
  }

}
