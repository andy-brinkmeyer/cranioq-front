import { TestBed } from '@angular/core/testing';

import { NewQuestionnaireResolverService } from './new-questionnaire-resolver.service';

describe('NewQuestionnaireResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewQuestionnaireResolverService = TestBed.get(NewQuestionnaireResolverService);
    expect(service).toBeTruthy();
  });
});
