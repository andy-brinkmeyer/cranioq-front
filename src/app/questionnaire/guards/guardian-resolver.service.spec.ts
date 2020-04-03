import { TestBed } from '@angular/core/testing';

import { GuardianResolverService } from './guardian-resolver.service';

describe('GuardianResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardianResolverService = TestBed.get(GuardianResolverService);
    expect(service).toBeTruthy();
  });
});
