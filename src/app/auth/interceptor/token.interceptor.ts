import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs';

import {TokenService} from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.tokenService.token === '') {
      return next.handle(req);
    }

    req = req.clone({
      setHeaders: {
        Authorization: 'Token ' + this.tokenService.token
      }
    });

    return next.handle(req);
  }

}
