import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { EditProfileResponse200, ProfileData } from './models/models'
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {
  editProfileUrl: string;
  redirectUrl: string;

  constructor(private http: HttpClient,
    private router: Router) {
      this.redirectUrl = '/view-profile';
     }

  editProfile(id, profileData: ProfileData): Observable<string> {
    this.editProfileUrl = environment.apiBaseUrl + '/user/' + id;
    return this.http.put<EditProfileResponse200>(this.editProfileUrl, profileData).pipe(
      map((response) => response),
      catchError( error => {
        if (error.error instanceof ErrorEvent) {
          return of(error.error.message);
        } else {
          return of(error.error.error_message);
        }
      }));
  }
}
