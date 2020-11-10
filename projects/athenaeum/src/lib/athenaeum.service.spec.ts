import { TestBed } from '@angular/core/testing';

import { AthenaeumService } from './athenaeum.service';

describe('AthenaeumService', () => {
  let service: AthenaeumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AthenaeumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
