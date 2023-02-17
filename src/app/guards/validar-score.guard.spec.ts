import { TestBed } from '@angular/core/testing';

import { ValidarScoreGuard } from './validar-score.guard';

describe('ValidarScoreGuard', () => {
  let guard: ValidarScoreGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidarScoreGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
