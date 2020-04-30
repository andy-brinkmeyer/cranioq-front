import { TestBed } from '@angular/core/testing';

import { QuestionnaireOverviewResolveService } from './questionnaire-overview-resolve.service';

describe('QuestionnaireOverviewResolveService', () => {
  let service: QuestionnaireOverviewResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionnaireOverviewResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
