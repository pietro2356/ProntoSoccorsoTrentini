import { TestBed } from '@angular/core/testing';

import { FavoritesService } from './favorites.service';
import { provideCore } from '@core/core';
import { routes } from '../../../app.routes';

describe('FavoritesService', () => {
  let service: FavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideCore({ routes })],
    });
    service = TestBed.inject(FavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
