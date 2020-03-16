import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { AuthStorageService } from '../auth/services/auth-storage.service';
import { EditProfileResponse200, ProfileData } from './models/models'
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {
  editProfileUrl: string;
  redirectUrl: string;
  auth_userid = this.authStorageService.userID;
  message: string;

  constructor(private http: HttpClient,
    private router: Router,
    private authStorageService: AuthStorageService) {
      this.redirectUrl = '/view-profile';
     }

  editProfile(id, profileData: ProfileData): Observable<string>{
    this.editProfileUrl = environment.apiBaseUrl + '/user/'+id;
    return this.http.put<EditProfileResponse200>(this.editProfileUrl, profileData).pipe(
      map(res => {this.message = res.displayable_message;
      return this.message}),
      catchError( error => {
        if (error.error instanceof ErrorEvent) {
          return of(error.error.message);
        } else {
          return of(error.error.error_message);
        }
      }));

  }
  
}
