import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LinkButtonComponent } from './link-button.component';

describe('ActionButtonComponent', () => {
  let component: LinkButtonComponent;
  let fixture: ComponentFixture<LinkButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [LinkButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
