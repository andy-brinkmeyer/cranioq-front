import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { TemplateInformation } from '../models/templates';


@Injectable({
  providedIn: 'root'
})
export class NewQuestionnaireResolverService implements Resolve<Array<TemplateInformation>> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<TemplateInformation>> |
    Promise<Array<TemplateInformation>> | Array<TemplateInformation> {
    return [];
  }
}
