import { TestBed } from '@angular/core/testing';

import { GetQDetailsService } from './get-q-details.service';

describe('GetQDetailsService', () => {
  let service: GetQDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetQDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
