import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WaitingBoxComponent } from './waiting-box.component';
import { ColorName } from '@core/models/colorCode';

describe('WaitingBoxComponent', () => {
  let component: WaitingBoxComponent;
  let fixture: ComponentFixture<WaitingBoxComponent>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(WaitingBoxComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('waitVal', 1);
    fixture.componentRef.setInput('color', ColorName.bianco);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
