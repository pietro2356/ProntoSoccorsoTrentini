import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonChip, IonContent, IonIcon, IonLabel, ViewWillEnter } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { StatoPSService } from '@core/services/StatoPS/stato-ps.service';
import { ProntoSoccorso } from '@core/models/statoProntoSoccorso';
import { toSignal } from '@angular/core/rxjs-interop';
import { addIcons } from 'ionicons';
import {
  arrowBack,
  arrowBackOutline,
  at,
  call,
  globe,
  location,
  mail,
  medical,
  navigate,
  star,
  starOutline,
  alertCircleOutline,
} from 'ionicons/icons';
import { WaitingBoxComponent } from '@ui/standard/waiting-box/waiting-box.component';
import { FavoritesService } from '@core/services/favorites/favorites.service';
import { FavoriteUtils } from '@core/services/favorites/favoriteUtils.class';
import { TranslatePipe } from '@codeandweb/ngx-translate';

@Component({
  selector: 'pst-ps-details',
  templateUrl: './ps-details.page.html',
  styleUrls: ['./ps-details.page.scss'],
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    IonChip,
    IonIcon,
    IonLabel,
    WaitingBoxComponent,
    IonBackButton,
    TranslatePipe,
  ],
})
export class PsDetailsPage implements ViewWillEnter {
  readonly #router = inject(ActivatedRoute);
  readonly #statoPsService = inject(StatoPSService);
  readonly favoritesService = inject(FavoritesService);
  routeParam = toSignal(this.#router.paramMap);
  readonly favUtils = new FavoriteUtils();

  prontoSoccorsoComp = computed<ProntoSoccorso | false>(() => {
    return this.#statoPsService.findPS(this.routeParam()?.get('id') || '');
  });

  constructor() {
    addIcons({
      location,
      medical,
      navigate,
      call,
      globe,
      mail,
      at,
      arrowBack,
      star,
      starOutline,
      arrowBackOutline,
      alertCircleOutline,
    });
  }

  ionViewWillEnter(): void {
    if (this.#statoPsService.prontoSoccorso().length === 0) this.#statoPsService.loadFavPS();
  }

  openTabViaLink(event: Event, url: string) {
    event.preventDefault();
    window.open(url, '_blank');
  }
}
