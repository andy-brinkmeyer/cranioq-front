import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { NewQuestionnaireService } from '../services/new-questionnaire.service';

import { TemplateInformation } from '../models/templates';


@Component({
  selector: 'app-new-questionnaire',
  templateUrl: './new-questionnaire.component.html',
  styleUrls: ['./new-questionnaire.component.css']
})
export class NewQuestionnaireComponent implements OnInit {
  newQuestionnaireForm;
  displayMessage: string;
  templates: Array<TemplateInformation>;
  selectedTemplateID: number;

  constructor(
    private formBuilder: FormBuilder,
    private newQuestionnaireService: NewQuestionnaireService,
    private route: ActivatedRoute
  ) {
    this.newQuestionnaireForm = formBuilder.group({
      email: ['', Validators.required],
      agreed: [false, Validators.requiredTrue],
      patient_id: ['', Validators.required],
      template_id: ['', Validators.required]
    });
    this.displayMessage = '';

    this.route.data.subscribe(res => {
      this.templates = res.templates;
      if (this.templates.length > 0) {
        this.selectedTemplateID = this.templates[0].id;
      }
    });
  }

  ngOnInit() {
  }

  onSelectChange(element) {
    this.selectedTemplateID = element.options[element.selectedIndex].getAttribute('templateID');
  }

  onSubmit(formData) {
    if (this.newQuestionnaireForm.valid) {
      formData.template_id = this.selectedTemplateID;
      formData.template_id = this.newQuestionnaireForm.template_id;
      this.newQuestionnaireService.create(formData).subscribe(message => this.displayMessage = message);
    } else {
      this.displayMessage = 'One or more fields were left empty.';
    }
  }

}
