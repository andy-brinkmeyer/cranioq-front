import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthStorageService } from '../services/auth-storage.service';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authStorageService: AuthStorageService,
    private loginService: LoginService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.loginService.redirectUrl = state.url;
    if (!this.authStorageService.isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }

    return this.authStorageService.role === 'gp' || this.authStorageService.role === 'specialist';
  }
}
