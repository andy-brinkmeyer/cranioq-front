import { Injectable } from '@angular/core';

import { GetDetailsService} from './get-details.service';

import { Resolve } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProfileResolveService implements Resolve<any>{

  constructor(private getDetailsService: GetDetailsService) { }

  resolve(route: ActivatedRouteSnapshot){
    return this.getDetailsService.getDetails(route.params.userid)
  }
}
