import { InjectionToken } from '@angular/core';
import { TLang } from '@core/models/TLang';

export const SUPPORTED_LANGUAGES = new InjectionToken<TLang[]>('SUPPORTED_LANGUAGES');
