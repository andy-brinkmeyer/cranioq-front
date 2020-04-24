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
  createLoading: boolean;
  questLoading: boolean;

  frontEndUrl = environment.frontEndUrl;

  constructor(
    private formBuilder: FormBuilder,
    private newQuestionnaireService: NewQuestionnaireService,
    private route: ActivatedRoute,
    public router: Router
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

    this.createLoading = false;
    this.questLoading = false;
  }

  ngOnInit() { }

  onSelectChange(element) {
    this.selectedTemplateID = element.options[element.selectedIndex].getAttribute('templateID');
  }

  onSubmit(formData) {
    if (this.newQuestionnaireForm.valid) {
      this.createLoading = true;
      formData.template_id = this.selectedTemplateID;
      this.newQuestionnaireService.create(formData).subscribe(res => {
        this.accessID = res.accessID;
        this.questionnaireID = res.questionnaireID;
        this.createLoading = false;
      }, error => {
        this.displayMessage = error.message;
        this.createLoading = false;
      });
    } else {
      this.displayMessage = 'One or more fields were left empty.';
    }
  }

  onGoToGPQuestionnaireClick() {
    this.questLoading = true;
    this.router.navigate(['/questionnaire/' + this.questionnaireID]).catch(() => {
      this.questLoading = false;
      this.displayMessage = 'Could not load the questionnaire.';
    });
  }
}
