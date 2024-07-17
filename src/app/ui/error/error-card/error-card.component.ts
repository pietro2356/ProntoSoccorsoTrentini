import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'pst-error-card',
  templateUrl: './error-card.component.html',
  styleUrls: ['./error-card.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonicModule],
})
export class ErrorCardComponent {
  error = input.required<string>();
  isError = input.required<boolean>();
}
