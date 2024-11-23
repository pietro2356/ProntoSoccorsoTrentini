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
import { Router } from '@angular/router';
import { FavoriteUtils } from '@core/services/favorites/favoriteUtils.class';
import { TranslatePipe } from '@codeandweb/ngx-translate';

@Component({
  selector: 'pst-card-ps',
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
    TranslatePipe,
  ],
})
export class CardPSComponent {
  readonly favoriteService = inject(FavoritesService);
  readonly #router = inject(Router);
  readonly favUtils = new FavoriteUtils();

  prontoSoccorso = model.required<ProntoSoccorso>();

  constructor() {
    addIcons({ star, starOutline });
  }

  redirectToDetails(event: Event) {
    this.#router.navigateByUrl(`/ps-details/${this.prontoSoccorso().codPsOd}`, {
      // TODO: Aggiungere codice appena possibile +  Valutare come gestire il redirect
      //browserUrl: this.#router.parseUrl(`/ps-details/${this.prontoSoccorso().codPsOd}/info`),
    });
    event.preventDefault();
  }
}
