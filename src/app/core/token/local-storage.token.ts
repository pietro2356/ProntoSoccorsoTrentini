import { InjectionToken } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export const LOCAL_STORAGE = new InjectionToken<Storage>('LOCAL_STORAGE', {
  providedIn: 'root',
  factory: () =>
    new Storage({
      name: 'ls_favourites_ps',
      storeName: 'ls_favourites_ps',
    }),
});
