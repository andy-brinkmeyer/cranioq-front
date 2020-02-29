import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import {NewQuestionnaireStorage} from '../../stores/new-questionnaire-storage.service';


@Component({
  selector: 'app-new-questionnaire',
  templateUrl: './new-questionnaire.component.html',
  styleUrls: ['./new-questionnaire.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewQuestionnaireComponent implements OnInit {
  newQuestionnaireForm;
  currentState;
  displayMessage: string;

  constructor(
    private newQuestionnaireStorage: NewQuestionnaireStorage,
    private formBuilder: FormBuilder
  ) {
    this.newQuestionnaireStorage.state.subscribe(state => {
      this.currentState = state;
    });
    this.newQuestionnaireForm = formBuilder.group({
      email: [this.currentState.email, Validators.required],
      agreed: [this.currentState.agreed, Validators.requiredTrue],
      patientID: [this.currentState.patientID, Validators.required]
    });
    this.displayMessage = '';
  }

  ngOnInit() {
  }

  onSubmit(formData) {
    this.newQuestionnaireStorage.email = formData.email;
    this.newQuestionnaireStorage.agreed = formData.agreed;
    this.newQuestionnaireStorage.patientID = formData.patientID;
    if (this.newQuestionnaireForm.valid) {
      this.displayMessage = '';
    } else {
      this.displayMessage = 'One or more fields were left empty.';
    }
  }

}
