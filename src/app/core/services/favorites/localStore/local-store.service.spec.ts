import { TestBed } from '@angular/core/testing';

import { LocalStoreService } from './local-store.service';
import { provideCore } from '@core/core';
import { routes } from '../../../../app.routes';

describe('LocalStoreService', () => {
  let service: LocalStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideCore({ routes })],
    });
    service = TestBed.inject(LocalStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
