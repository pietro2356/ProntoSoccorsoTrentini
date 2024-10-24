import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsDetailsPage } from './ps-details.page';
import { routes } from '../../app.routes';
import { provideCore } from '@core/core';

describe('PsDetailsPage', () => {
  let component: PsDetailsPage;
  let fixture: ComponentFixture<PsDetailsPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideCore({ routes })],
    });
    fixture = TestBed.createComponent(PsDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
