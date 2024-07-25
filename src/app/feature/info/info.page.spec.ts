import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoPage } from './info.page';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';

describe('InfoPage', () => {
  let component: InfoPage;
  let fixture: ComponentFixture<InfoPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
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
