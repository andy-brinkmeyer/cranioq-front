import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';

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
  accessID: string;
  questionnaireID: number;

  frontEndUrl = environment.frontEndUrl;

  constructor(
    private formBuilder: FormBuilder,
    private newQuestionnaireService: NewQuestionnaireService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.newQuestionnaireForm = formBuilder.group({
      email: ['', Validators.required],
      agreed: [false, Validators.requiredTrue],
      patient_id: ['', Validators.required],
      template_id: ''
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
      this.newQuestionnaireService.create(formData).subscribe(res => {
        this.accessID = res.accessID;
        this.questionnaireID = res.questionnaireID;
      });
    } else {
      this.displayMessage = 'One or more fields were left empty.';
    }
  }

  onGoToGPQuestionnaireClick() {
    this.router.navigate(['/questionnaire/' + this.questionnaireID]);
  }
}
