import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { GetDetailsService} from './get-details.service';


@Injectable({
  providedIn: 'root'
})
export class ProfileResolveService implements Resolve<any> {

  private previousUrl: string;

  constructor(private getDetailsService: GetDetailsService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.getDetailsService.getDetails(route.params.userid);
  }

}
