import { ChangeDetectionStrategy, Component, ElementRef, input, viewChild, AfterViewChecked } from '@angular/core';
import { Colors, getHexColor } from '@core/models/colorCode';
import { MinutesToTimePipe } from '@core/pipe/minutes-to-time.pipe';

@Component({
  selector: 'pst-waiting-box',
  templateUrl: './waiting-box.component.html',
  styleUrls: ['./waiting-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MinutesToTimePipe],
})
export class WaitingBoxComponent implements AfterViewChecked {
  waitVal = input.required<number>();
  color = input.required<Colors>();
  small = input<boolean>();

  waitBox = viewChild.required<ElementRef>('waitbox');

  ngAfterViewChecked() {
    this.waitBox().nativeElement.style.setProperty('background-color', getHexColor(this.color()));
  }

  protected readonly isNaN = isNaN;
}
