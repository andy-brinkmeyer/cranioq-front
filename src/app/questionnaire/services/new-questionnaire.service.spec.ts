import { TestBed } from '@angular/core/testing';

import { NewQuestionnaireService } from './new-questionnaire.service';

describe('NewQuestionnaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewQuestionnaireService = TestBed.get(NewQuestionnaireService);
    expect(service).toBeTruthy();
  });
});
