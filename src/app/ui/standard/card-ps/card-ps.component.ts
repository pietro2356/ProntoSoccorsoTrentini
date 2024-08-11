import { ChangeDetectionStrategy, Component, inject, model } from '@angular/core';
import { ProntoSoccorso } from '@core/models/statoProntoSoccorso';
import { WaitingBoxComponent } from '@ui/standard/waiting-box/waiting-box.component';
import { FirstLetterToCapitalPipe } from '@core/pipe/first-letter-to-capital.pipe';
import { ExtractPSPipe } from '@core/pipe/extract-ps.pipe';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
} from '@ionic/angular/standalone';
import { FavoritesService } from '@core/services/favorites/favorites.service';
import { addIcons } from 'ionicons';
import { star, starOutline } from 'ionicons/icons';
import { StatoPSService } from '@core/services/StatoPS/stato-ps.service';

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
    IonIcon,
  ],
})
export class CardPSComponent {
  favoriteService = inject(FavoritesService);
  #statoPSService = inject(StatoPSService);

  prontoSoccorso = model.required<ProntoSoccorso>();

  constructor() {
    addIcons({ star, starOutline });
  }

  removeFavorite(ps: ProntoSoccorso) {
    this.favoriteService.removeFavorite(ps.codPsOd);
    setTimeout(() => {
      if (!this.favoriteService.isFavorite(ps.codPsOd)) this.#statoPSService.loadFavPS();
    }, 5000);
  }
}
