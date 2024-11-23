import { computed, inject, Injectable, signal } from '@angular/core';
import { CodiceIdPS } from '@core/models/statoProntoSoccorso';
import { LOCAL_STORAGE } from '@core/token/local-storage.token';

@Injectable({
  providedIn: 'root',
})
export class LocalStoreService {
  readonly #storage = inject(LOCAL_STORAGE);
  readonly #storageCreated = signal<boolean>(false);
  public storageCreated = computed(() => this.#storageCreated());

  constructor() {
    this.init();
  }

  /**
   * Initialize the storage
   */
  public async init() {
    this.#storage.create().then(() => this.#storageCreated.set(true));
  }

  /**
   * Get all keys stored in the storage
   */
  public async getKeys(): Promise<CodiceIdPS[]> {
    return await this.#storage.keys();
  }

  /**
   * Set data in the storage
   * @param key The key to set
   * @param value The value to set
   * @returns the value set in the storage as a promise
   */
  public async setData<T>(key: CodiceIdPS, value: T): Promise<T> {
    return await this.#storage.set(key, value);
  }

  /**
   * Get data from the storage
   * @param key The key to get
   */
  public async getData<T>(key: CodiceIdPS): Promise<T> {
    return await this.#storage.get(key);
  }

  /**
   * Remove data from the storage
   * @param key
   */
  public async removeData<T>(key: CodiceIdPS): Promise<T> {
    return await this.#storage.remove(key);
  }

  /**
   * Clear the storage
   */
  public async clear() {
    return await this.#storage.clear();
  }
}
