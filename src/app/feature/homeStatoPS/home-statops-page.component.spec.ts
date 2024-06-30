import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStatoPSPage } from './home-statops-page.component';

describe('HomePage', () => {
  let component: HomeStatoPSPage;
  let fixture: ComponentFixture<HomeStatoPSPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(HomeStatoPSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
