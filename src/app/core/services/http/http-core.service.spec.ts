import { TestBed } from '@angular/core/testing';

import { HttpCoreService } from './http-core.service';

describe('HttpCoreService', () => {
  let service: HttpCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a get method', () => {
    expect(service.get).toBeDefined();
  });

  it('should have a post method', () => {
    expect(service.post).toBeDefined();
  });

  it('should have a put method', () => {
    expect(service.put).toBeDefined();
  });

  it('should have a delete method', () => {
    expect(service.delete).toBeDefined();
  });

  it('should have a patch method', () => {
    expect(service.patch).toBeDefined();
  });

  it('should have a head method', () => {
    expect(service.head).toBeDefined();
  });

  it('should have a options method', () => {
    expect(service.options).toBeDefined();
  });
});
