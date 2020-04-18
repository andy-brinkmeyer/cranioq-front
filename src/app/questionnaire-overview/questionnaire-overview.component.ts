import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// import important services i create e.g. getqdetailsservice
import { GetQDetailsService } from '../questionnaire-overview/get-q-details.service'

@Component({
  selector: 'app-questionnaire-overview',
  templateUrl: './questionnaire-overview.component.html',
  styleUrls: ['./questionnaire-overview.component.css']
})

export class QuestionnaireOverviewComponent implements OnInit {
// declare variables here 
  QDetails; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private GetQDetailsService: GetQDetailsService,
    // need to put routing and services here 
  ) { 
    // instatitate variables here 
  }

  ngOnInit() {
    this.GetQDetailsService.getQDetails().subscribe((data) => {
      this.QDetails = data;
      console.log("it works");
      console.log("data: ", this.QDetails);

    })
  }

}


// put logic here 
