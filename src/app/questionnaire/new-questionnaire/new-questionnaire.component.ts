import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';

import {NewQuestionnaireStorage} from '../../stores/new-questionnaire-storage.service';


@Component({
  selector: 'app-new-questionnaire',
  templateUrl: './new-questionnaire.component.html',
  styleUrls: ['./new-questionnaire.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewQuestionnaireComponent implements OnInit {
  emailForm;
  currentState;

  constructor(
    private newQuestionnaireStorage: NewQuestionnaireStorage,
    private formBuilder: FormBuilder
  ) {
    this.emailForm = formBuilder.group({
      email: ''
    });
    this.newQuestionnaireStorage.state.subscribe(state => {
      this.currentState = state;
    });
  }

  ngOnInit() {
  }

  onSubmit(formData) {
    this.newQuestionnaireStorage.email = formData.email;
  }

}
