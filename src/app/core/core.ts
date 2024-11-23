import {
  PreloadAllModules,
  provideRouter,
  Routes,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling,
  withPreloading,
  withRouterConfig,
} from '@angular/router';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from '@core/services/interceptor/loading-interceptor.interceptor';
import { ErrorHandler, provideExperimentalZonelessChangeDetection, inject, provideAppInitializer } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { GlobalErrorHandler } from '@core/services/errors/global-error-handler.handler';
import { LocalStoreService } from '@core/services/favorites/localStore/local-store.service';
import { FavoritesService } from '@core/services/favorites/favorites.service';
import { provideTranslateService, TranslateLoader } from '@codeandweb/ngx-translate';
import { TranslateHttpLoader } from '@codeandweb/http-loader';
import { InternationalizationService } from '@core/services/Internationalization/internationalization.service';
import { environment } from '@env/environment';
import { API_URL } from '@core/token/api-url.token';
import { SUPPORTED_LANGUAGES } from '@core/token/lang-i18n.token';
import { LOCAL_STORAGE } from '@core/token/local-storage.token';
import { LOCAL_STORAGE_SERVICE } from '@core/token/local-storage-service.token';

export interface CoreOptions {
  routes: Routes;
}

const Httpi18nLoaderFactory = (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json');

export function provideCore({ routes }: CoreOptions) {
  return [
    provideExperimentalZonelessChangeDetection(),
    provideIonicAngular(),
    provideHttpClient(withFetch(), withInterceptors([loadingInterceptor])),
    provideRouter(
      routes,
      withPreloading(PreloadAllModules),
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
      withComponentInputBinding(),
      withEnabledBlockingInitialNavigation(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      })
    ),
    provideAnimations(),
    provideTranslateService({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: Httpi18nLoaderFactory,
        deps: [HttpClient],
      },
    }),
    provideAppInitializer(() => {
      const favService = inject(FavoritesService);
      inject(LocalStoreService)
        .init()
        .then(() => favService.loadFavorites());
    }),
    provideAppInitializer(() => {
      inject(InternationalizationService).initCurrentLangFromDefaultLang();
    }),
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    {
      provide: API_URL,
      useValue: environment.apiTrentinoAA,
    },
    {
      provide: SUPPORTED_LANGUAGES,
      useValue: environment.supportedLanguages,
    },
    {
      provide: LOCAL_STORAGE,
    },
    {
      provide: LOCAL_STORAGE_SERVICE,
      useClass: LocalStoreService,
    },
  ];
}
