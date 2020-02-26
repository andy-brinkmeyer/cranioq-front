import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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

  constructor(
    private newQuestionnaireStorage: NewQuestionnaireStorage,
    private formBuilder: FormBuilder
  ) {
    this.newQuestionnaireForm = formBuilder.group({
      email: '',
      agreed: false,
      patientID: ''
    });
    this.newQuestionnaireStorage.state.subscribe(state => {
      this.currentState = state;
    });
  }

  ngOnInit() {
  }

  onSubmit(formData) {
    this.newQuestionnaireStorage.email = formData.email;
    this.newQuestionnaireStorage.agreed = formData.agreed;
    this.newQuestionnaireStorage.patientID = formData.patientID;
  }

}
