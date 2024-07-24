import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ErrorCardComponent } from './error-card.component';

describe('ErrorCardComponent', () => {
  let component: ErrorCardComponent;
  let fixture: ComponentFixture<ErrorCardComponent>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(ErrorCardComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('error', { message: 'Error message from test' });
    fixture.componentRef.setInput('isError', true);

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
