import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

import { Observable, of, range } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { GetQResponse200 } from './models/models';

@Injectable({
  providedIn: 'root'
})
export class GetQDetailsService {

  questionnaireUrl: string;
  QDetails;

  constructor(private http: HttpClient) { }

  // for object, put 'object[]' or 'any[]' to get a dictionary of the questonnare info when i do it
  getQDetails(pageNum, pgSize): Observable<object[]> {
    this.questionnaireUrl = environment.apiBaseUrl + '/quests';
    return this.http.get<GetQResponse200>(this.questionnaireUrl, {
        params: {
        page: pageNum,
        pageSize: pgSize
        },
    }).pipe(
      map(res => {
        this.QDetails = res;

        // Push onto reviewed or pending array
        let reviewedArray = [];
        let pendingArray = [];
        for (const q in this.QDetails) {
          if (JSON.stringify(this.QDetails[q].review) === '[]') {
            pendingArray.push(this.QDetails[q]);
          } else {
            reviewedArray.push(this.QDetails[q]);
          }
        }
        return this.QDetails;
      }),
      catchError( error => {
        if (error.error instanceof ErrorEvent) {
          return of(error.error.message);
        } else {
          return of(error.error.error_message);
        }
      }));
      }

}
