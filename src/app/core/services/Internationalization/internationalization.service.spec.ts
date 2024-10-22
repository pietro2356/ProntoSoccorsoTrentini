import { TestBed } from '@angular/core/testing';

import { InternationalizationService } from './internationalization.service';
import { provideCore } from '@core/core';
import { routes } from '../../../app.routes';

describe('InternationalizationService', () => {
  let service: InternationalizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideCore({ routes })],
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(InternationalizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
