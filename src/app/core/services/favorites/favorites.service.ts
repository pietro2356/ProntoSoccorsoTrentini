import { computed, inject, Injectable, signal } from '@angular/core';
import { CodiceIdPS } from '@core/models/statoProntoSoccorso';
import { autoCatchPromiseFn } from '@core/services/errors/functions/autocatchpromise.decorator';
import { LOCAL_STORAGE_SERVICE } from '@core/token/local-storage-service.token';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  readonly #locStoreService = inject(LOCAL_STORAGE_SERVICE);
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
