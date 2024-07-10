import { TestBed } from '@angular/core/testing';
import { AppStateService } from '@core/services/appState/app-state.service';

describe('AppStateService', () => {
  let service: AppStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppStateService],
    });
    service = TestBed.inject(AppStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initially be in READY state', () => {
    expect(service.state).toBe('READY');
    expect(service.error).toBeNull();
  });

  it('should set state to LOADING', () => {
    service.setLoading();
    expect(service.state).toBe('LOADING');
    expect(service.error).toBeNull();
  });

  it('should set state to ERROR with a message', () => {
    const errorMessage = 'An error occurred!';
    service.setError(errorMessage);
    expect(service.state).toBe('ERROR');
    expect(service.error).toBe(errorMessage);
  });

  it('should check state accurately', () => {
    service.setLoading();
    expect(service.isStatusLoading()).toBeTrue();
    expect(service.isStatusError()).toBeFalse();
    expect(service.isStatusReady()).toBeFalse();

    service.setReady();
    expect(service.isStatusLoading()).toBeFalse();
    expect(service.isStatusError()).toBeFalse();
    expect(service.isStatusReady()).toBeTrue();

    service.setError('Another error!');
    expect(service.isStatusLoading()).toBeFalse();
    expect(service.isStatusError()).toBeTrue();
    expect(service.isStatusReady()).toBeFalse();
  });
});
