import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AuthStorageService } from '../services/auth-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authStorageService: AuthStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authStorageService.token === '') {
      return next.handle(req);
    }

    req = req.clone({
      setHeaders: {
        Authorization: 'Token ' + this.authStorageService.token
      }
    });

    return next.handle(req);
  }

}
