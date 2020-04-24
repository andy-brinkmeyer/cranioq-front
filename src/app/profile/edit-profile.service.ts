import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { EditProfileResponse200, ProfileData } from './models/models'

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {
  editProfileUrl: string;
  redirectUrl: string;

  constructor(private http: HttpClient) {
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
