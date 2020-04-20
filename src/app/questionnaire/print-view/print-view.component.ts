import { Component, OnInit, Input } from '@angular/core';

import { Question } from '../models/questionnaire';

import {Observable, of} from 'rxjs';


@Component({
  selector: 'app-print-view',
  templateUrl: './print-view.component.html',
  styleUrls: ['./print-view.component.css']
})
export class PrintViewComponent implements OnInit {
  @Input() categories: Map<string, Array<Question>>;
  @Input() categoryKeys: Array<string>;

  categoriesAsObservable: Map<number, Observable<Array<Question>>>;

  constructor() { }

  ngOnInit() {
    this.categoriesAsObservable = new Map();
    this.categoryKeys.forEach( key => {
      this.categoriesAsObservable[key] = of(this.categories[key]);
    });
  }

}
