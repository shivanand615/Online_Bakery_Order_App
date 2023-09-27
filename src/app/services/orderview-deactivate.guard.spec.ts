import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { orderviewDeactivateGuard } from './orderview-deactivate.guard';

describe('orderviewDeactivateGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => orderviewDeactivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
