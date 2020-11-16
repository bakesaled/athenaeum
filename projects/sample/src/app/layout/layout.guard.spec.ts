import { TestBed } from '@angular/core/testing';

import { LayoutGuard } from './layout.guard';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LayoutGuard', () => {
  let guard: LayoutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    guard = TestBed.inject(LayoutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
