import { TestBed } from '@angular/core/testing';

import { StatoPSService } from './stato-ps.service';

describe('StatoPSService', () => {
  let service: StatoPSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatoPSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
