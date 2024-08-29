import { inject } from '@angular/core';
import { StatoPSService } from '@core/services/StatoPS/stato-ps.service';
import { FavoritesService } from '@core/services/favorites/favorites.service';
import { ProntoSoccorso } from '@core/models/statoProntoSoccorso';

export class FavoriteUtils {
  readonly #psService = inject(StatoPSService);
  readonly #favService = inject(FavoritesService);

  addFavorite(_event: Event, _ps: ProntoSoccorso) {
    this.#favService.addFavorite(_ps.codPsOd);
    _event.stopPropagation();
  }

  removeFavorite(_event: Event, _ps: ProntoSoccorso) {
    this.#favService.removeFavorite(_ps.codPsOd);
    setTimeout(() => {
      if (!this.#favService.isFavorite(_ps.codPsOd)) this.#psService.loadFavPS();
    }, 5000);
    _event.stopPropagation();
  }
}
