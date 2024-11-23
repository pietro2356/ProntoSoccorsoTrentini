import { InjectionToken } from '@angular/core';
import { LocalStoreService } from '@core/services/favorites/localStore/local-store.service';

export const LOCAL_STORAGE_SERVICE = new InjectionToken<LocalStoreService>('LOCAL_STORAGE_SERVICE');
