import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoPage } from './info.page';
import { routes } from '../../app.routes';
import { provideCore } from '@core/core';

describe('InfoPage', () => {
  let component: InfoPage;
  let fixture: ComponentFixture<InfoPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideCore({ routes })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
