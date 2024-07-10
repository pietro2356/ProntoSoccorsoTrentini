import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProntoSoccorso } from '@core/models/statoProntoSoccorso';
import { WaitingBoxComponent } from '@ui/waiting-box/waiting-box.component';
import { ColorName } from '@core/models/colorCode';
import { FirstLetterToCapitalPipe } from '@core/pipe/first-letter-to-capital.pipe';
import { ExtractPSPipe } from '@core/pipe/extract-ps.pipe';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'pst-card-ps',
  standalone: true,
  templateUrl: './card-ps.component.html',
  styleUrls: ['./card-ps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    WaitingBoxComponent,
    FirstLetterToCapitalPipe,
    ExtractPSPipe,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
  ],
})
export class CardPSComponent {
  prontoSoccorso = input.required<ProntoSoccorso>();
  protected readonly ColorName = ColorName;
}
