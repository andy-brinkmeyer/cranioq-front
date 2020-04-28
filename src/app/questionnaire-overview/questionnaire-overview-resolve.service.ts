import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { GetQDetailsService } from './get-q-details.service';

@Injectable({
  providedIn: 'root'
})

export class QuestionnaireOverviewResolveService implements Resolve<any> {

  constructor(private getQDetailsService: GetQDetailsService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.getQDetailsService.getQDetails(1, 50);
  }


}
