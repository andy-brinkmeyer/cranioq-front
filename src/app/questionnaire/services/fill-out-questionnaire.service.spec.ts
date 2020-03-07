import { TestBed } from '@angular/core/testing';

import { FillOutQuestionnaireService } from './fill-out-questionnaire.service';

describe('FillOutQuestionnaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FillOutQuestionnaireService = TestBed.get(FillOutQuestionnaireService);
    expect(service).toBeTruthy();
  });
});
