import { TestBed } from '@angular/core/testing';

import { NewQuestionnaireStorage } from './new-questionnaire-storage.service';

describe('NewQuestionnaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewQuestionnaireStorage = TestBed.get(NewQuestionnaireStorage);
    expect(service).toBeTruthy();
  });
});
