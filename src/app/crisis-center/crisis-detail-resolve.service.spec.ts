/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrisisDetailResolve } from './crisis-detail-resolve.service';

describe('Service: CrisisDetailResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrisisDetailResolve]
    });
  });

  it('should ...', inject([CrisisDetailResolve], (service: CrisisDetailResolve) => {
    expect(service).toBeTruthy();
  }));
});
