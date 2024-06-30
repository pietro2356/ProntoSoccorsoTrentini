import { TestBed } from '@angular/core/testing';

import { AppStateService } from './app-state.service';

describe('AppStateService', () => {
  let service: AppStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set the state to READY', () => {
    service.setReady();
    expect(service.state).toBe('READY');
  });

  it('should set the state to LOADING', () => {
    service.setLoading();
    expect(service.state).toBe('LOADING');
  });

  it('should set the state to ERROR', () => {
    service.setError('Error message');
    expect(service.state).toBe('ERROR');
  });
});
