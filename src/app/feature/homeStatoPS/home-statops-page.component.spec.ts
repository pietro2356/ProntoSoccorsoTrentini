import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStatoPSPage } from './home-statops-page.component';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';
import { provideHttpClient } from '@angular/common/http';

describe('HomePage', () => {
  let component: HomeStatoPSPage;
  let fixture: ComponentFixture<HomeStatoPSPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes), provideHttpClient()],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(HomeStatoPSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
