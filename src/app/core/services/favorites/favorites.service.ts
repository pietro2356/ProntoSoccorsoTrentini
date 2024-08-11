import { computed, inject, Injectable, signal } from '@angular/core';
import { LocalStoreService } from '@core/services/favorites/localStore/local-store.service';
import { CodiceIdPS } from '@core/models/statoProntoSoccorso';
import { autoCatchPromiseFn } from '@core/services/errors/functions/autocatchpromise.decorator';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  readonly #locStoreService = inject(LocalStoreService);
  readonly #favorites = signal<CodiceIdPS[]>([]);
  public favorites = computed<CodiceIdPS[]>(() => this.#favorites());

  @autoCatchPromiseFn
  public loadFavorites() {
    this.#locStoreService.getKeys().then(keys => {
      this.#favorites.set(keys);
    });
  }

  @autoCatchPromiseFn
  public addFavorite(favorite: CodiceIdPS) {
    this.#locStoreService.setData(favorite, favorite).then(() => this.loadFavorites());
  }

  @autoCatchPromiseFn
  public removeFavorite(favorite: CodiceIdPS) {
    this.#locStoreService.removeData(favorite).then(() => this.loadFavorites());
  }

  @autoCatchPromiseFn
  public clearFavorites() {
    this.#locStoreService.clear().then(() => this.loadFavorites());
  }

  public isFavorite(favorite: CodiceIdPS) {
    return this.#favorites().includes(favorite);
  }
}
