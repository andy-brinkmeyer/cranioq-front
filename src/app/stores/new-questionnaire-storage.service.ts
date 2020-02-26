import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Map } from 'immutable';



@Injectable({
  providedIn: 'root'
})
export class NewQuestionnaireStorage {

  private readonly stateDataSubject = new BehaviorSubject<Map<string, any>>(Map({
    email: '',
    agreed: false,
    patientID: ''
  }));

  readonly state = this.stateDataSubject.asObservable();

  private get stateData() {
    return this.stateDataSubject.getValue();
  }

  private set stateData(val: Map<string, any>) {
    this.stateDataSubject.next(val);
  }

  set email(email: string) {
    this.stateData = this.stateData.set('email', email);
  }

  set agreed(agreed: boolean) {
    this.stateData = this.stateData.set('agreed', agreed);
  }

  set patientID(patientID: string) {
    this.stateData = this.stateData.set('patientID', patientID);
  }
}
