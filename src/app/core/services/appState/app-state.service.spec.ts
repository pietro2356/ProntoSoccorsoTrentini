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
    expect(service.error).toBeNull();
    expect(service.isStatusLoading()).toBeTrue();
  });

  it('should set the state to ERROR', () => {
    service.setError('Error message');
    expect(service.state).toBe('ERROR');
    expect(service.error).toBe('Error message');
  });

  it('should check if the status is loading', () => {
    service.setLoading();
    expect(service.isStatusLoading()).toBeTrue();
  });

  it('should check if the status is error', () => {
    service.setError('Error message');
    expect(service.isStatusError()).toBeTrue();
  });

  it('should check if the status is ready', () => {
    service.setReady();
    expect(service.isStatusReady()).toBeTrue();
  });

  it('should check if the status is not loading', () => {
    service.setReady();
    expect(service.isStatusLoading()).toBeFalse();
  });

  it('should check if the status is not error', () => {
    service.setReady();
    expect(service.isStatusError()).toBeFalse();
  });

  it('should check if the status is not ready', () => {
    service.setLoading();
    expect(service.isStatusReady()).toBeFalse();
  });

  it('should check if the status is not loading', () => {
    service.setError('Error message');
    expect(service.isStatusLoading()).toBeFalse();
  });

  it('should check if the status is not error', () => {
    service.setLoading();
    expect(service.isStatusError()).toBeFalse();
  });

  it('should check if the status is not ready', () => {
    service.setError('Error message');
    expect(service.isStatusReady()).toBeFalse();
  });

  it('should check if the status is not loading', () => {
    service.setReady();
    expect(service.isStatusLoading()).toBeFalse();
  });

  it('should check if the status is not error', () => {
    service.setReady();
    expect(service.isStatusError()).toBeFalse();
  });

  it('should check if the status is not ready', () => {
    service.setLoading();
    expect(service.isStatusReady()).toBeFalse();
  });
});
