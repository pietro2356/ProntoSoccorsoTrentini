import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundPage } from './not-found-page.component';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';

describe('NotFoundComponent', () => {
  let component: NotFoundPage;
  let fixture: ComponentFixture<NotFoundPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(NotFoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
