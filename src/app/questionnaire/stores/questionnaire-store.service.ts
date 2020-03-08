import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Map } from 'immutable';


@Injectable({
  providedIn: 'root'
})
export class QuestionnaireStore {
  private readonly stateSubject = new BehaviorSubject(Map({
    questionnaireID: -1,
    templateID: 1
  }));

  readonly state = this.stateSubject.asObservable();

  get stateSnapshot() {
    return this.currentState;
  }

  private get currentState() {
    return this.stateSubject.getValue();
  }

  private set currentState(newState) {
    this.stateSubject.next(newState);
  }

  set questionnaireID(id: number) {
    this.currentState = this.currentState.set('questionnaireID', id);
  }
}
