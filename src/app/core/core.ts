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
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    provideAppInitializer(() => {
      const favService = inject(FavoritesService);
      inject(LocalStoreService)
        .init()
        .then(() => favService.loadFavorites());
    }),
    provideAppInitializer(() => {
      inject(InternationalizationService).initCurrentLangFromDefaultLang();
    }),
  ];
}
