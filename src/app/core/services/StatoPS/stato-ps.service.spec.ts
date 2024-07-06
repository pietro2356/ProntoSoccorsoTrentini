// import { TestBed } from '@angular/core/testing';
//
// import { StatoPSService } from './stato-ps.service';
// import { provideHttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { StatoProntoSoccorso } from '@core/models/statoProntoSoccorso';
//
// describe('StatoPSService', () => {
//   let service: StatoPSService;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [provideHttpClient()]
//     });
//     service = TestBed.inject(StatoPSService);
//   });
//
//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
//
//   it('should have a getStatoPS method', () => {
//     expect(service.getStatoPS).toBeDefined();
//   });
//
//   it('should get PS data', () => {
//     expect(service.getStatoPS().subscribe()).toEqual(new Observable<StatoProntoSoccorso>());
//   });
// });


import { TestBed } from '@angular/core/testing';
import { StatoPSService } from './stato-ps.service';
import { HttpCoreService } from '@core/services/http/http-core.service';
import { of } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';
import { inject } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { StatoProntoSoccorso } from '@core/models/statoProntoSoccorso';
import { environment } from '@env/environment.prod';

describe('StatoPSService', () => {
  let service: StatoPSService;
  let httpCoreServiceMock: HttpCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StatoPSService,
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    });
    service = TestBed.inject(StatoPSService);
    httpCoreServiceMock = TestBed.inject(HttpCoreService) as any;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get PS data', inject([HttpTestingController, StatoPSService], (httpMock: HttpTestingController, dataService: StatoPSService) => {
    const mockPSData = {} as StatoProntoSoccorso;

    dataService.getStatoPS<StatoProntoSoccorso>().subscribe((data: StatoProntoSoccorso) => {
      expect(data.dataAggiornamento).toEqual("mockPSData");
    });

    const mockReq = httpMock.expectOne(environment.apiTrentinoAA);

    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(mockPSData);

    httpMock.verify();
  }));

  it('should call HttpCoreService.get on getStatoPS', () => {
    const mockData = { some: 'data' };
    httpCoreServiceMock.get(of(mockData));

    service.getStatoPS().subscribe();

    expect(httpCoreServiceMock.get).toHaveBeenCalledWith(environment.apiTrentinoAA);
  });

  it('should return the data from HttpCoreService.get', (done) => {
    const mockData = { some: 'data' };
    httpCoreServiceMock.get.mockReturnValue(of(mockData));

    service.getStatoPS().subscribe((data) => {
      expect(data).toBe(mockData);
      done();
    });
  });
});
