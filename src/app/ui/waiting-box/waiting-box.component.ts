import { ChangeDetectionStrategy, Component, effect, ElementRef, input, viewChild } from '@angular/core';
import { ColorName, getHexColor } from '@core/models/colorCode';

@Component({
  selector: 'pst-waiting-box',
  standalone: true,
  template: '<div #waitbox class="waitValBox">{{waitVal()}}</div>',
  styleUrls: ['./waiting-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaitingBoxComponent{

  waitVal = input.required<number>();
  color = input<ColorName>();

  waitBox = viewChild.required<ElementRef>("waitbox");

  constructor() {
    effect(() => {
      this.waitBox().nativeElement.style.setProperty('background-color', getHexColor(this.color()?.toString() as string));
    });
  }
}
