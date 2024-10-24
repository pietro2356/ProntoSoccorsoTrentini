import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStatoPSPage } from './home-statops-page.component';
import { routes } from '../../app.routes';
import { provideCore } from '@core/core';

describe('HomePage', () => {
  let component: HomeStatoPSPage;
  let fixture: ComponentFixture<HomeStatoPSPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideCore({ routes })],
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
