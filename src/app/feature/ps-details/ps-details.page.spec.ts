import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsDetailsPage } from './ps-details.page';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';

describe('PsDetailsPage', () => {
  let component: PsDetailsPage;
  let fixture: ComponentFixture<PsDetailsPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideRouter(routes)],
    });
    fixture = TestBed.createComponent(PsDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
