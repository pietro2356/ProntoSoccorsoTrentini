import { TestBed } from '@angular/core/testing';

import { GlobalErrorHandler } from './global-error-handler.handler';
import { AppStateService } from '@core/services/appState/app-state.service';

describe('GlobalErrorHandlerService', () => {
  let service: GlobalErrorHandler;
  let appState: AppStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalErrorHandler);
    appState = TestBed.inject(AppStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should handle error', () => {
    const error = new Error('Error');
    service.handleError(error);
    expect(service).toBeTruthy();
  });

  it('should handle error and appState is in error', () => {
    const error = new Error('Error');
    service.handleError(error);
    expect(appState.isStatusError).toBeTruthy();
    expect(appState.isStatusLoading()).toBeFalse();
    expect(appState.isStatusReady()).toBeFalse();
  });

  it('should handle error and appState is in error and message correspond', () => {
    const error = new Error('Error message');
    service.handleError(error);
    expect(appState.isStatusError()).toBeTruthy();
    expect(appState.isStatusLoading()).toBeFalse();
    expect(appState.isStatusReady()).toBeFalse();
    expect(appState.error).toBe('Error message');
  });
});
