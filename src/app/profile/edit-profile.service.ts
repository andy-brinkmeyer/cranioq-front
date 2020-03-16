import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { AuthStorageService } from '../auth/services/auth-storage.service';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {
  editProfileUrl: string;
  redirectUrl: string;
  auth_userid = this.authStorageService.userID;

  constructor(private http: HttpClient,
    private router: Router,
    private authStorageService: AuthStorageService) {
      this.redirectUrl = '/view-profile';
     }

  editProfile(id, profileData){
    this.editProfileUrl = environment.apiBaseUrl + '/user/'+id;
    return this.http.put(this.editProfileUrl, profileData);

  }
  
}
