import { TestBed } from '@angular/core/testing';

import { LocalStoreService } from './local-store.service';
import { provideHttpClient } from '@angular/common/http';

describe('LocalStoreService', () => {
  let service: LocalStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(LocalStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
