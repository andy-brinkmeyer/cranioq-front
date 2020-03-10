import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Map } from 'immutable';


@Injectable({
  providedIn: 'root'
})
export class QuestionnaireStore {

  private readonly stateSubject = new BehaviorSubject<Map<string, string | number>>(Map({
    questionnaireID: -1
  }));

  readonly state = this.stateSubject.asObservable();

  private get currentState(): Map<string, string | number> {
    return this.stateSubject.getValue();
  }

  private set currentState(newState: Map<string, string | number>) {
    this.stateSubject.next(newState);
  }

  set questionnaireID(id: number) {
    this.currentState = this.currentState.set('questionnaireID', id);
  }
}
