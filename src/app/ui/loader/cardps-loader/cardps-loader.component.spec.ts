import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CardpsLoaderComponent } from './cardps-loader.component';

describe('CardpsLoaderComponent', () => {
  let component: CardpsLoaderComponent;
  let fixture: ComponentFixture<CardpsLoaderComponent>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(CardpsLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
