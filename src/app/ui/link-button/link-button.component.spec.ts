import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LinkButtonComponent } from './link-button.component';

describe('LinkButtonComponent', () => {
  let component: LinkButtonComponent;
  let fixture: ComponentFixture<LinkButtonComponent>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(LinkButtonComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('icon', 'ℹ️');
    fixture.componentRef.setInput('text', '');
    fixture.componentRef.setInput('link', '/info');
    fixture.componentRef.setInput('severity', 'info');

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
