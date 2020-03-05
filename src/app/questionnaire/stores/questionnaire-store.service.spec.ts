import { TestBed } from '@angular/core/testing';

import { QuestionnaireStore } from './questionnaire-store.service';

describe('QuestionnaireStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionnaireStore = TestBed.get(QuestionnaireStore);
    expect(service).toBeTruthy();
  });
});
