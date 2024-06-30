import {
  PreloadAllModules,
  provideRouter,
  Routes,
  withComponentInputBinding, withEnabledBlockingInitialNavigation, withInMemoryScrolling,
  withPreloading,
  withRouterConfig
} from "@angular/router";
import {provideIonicAngular} from "@ionic/angular/standalone";
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from '@core/services/interceptor/loading-interceptor.interceptor';

export interface CoreOptions {
  routes: Routes;
}

export function provideCore({ routes }: CoreOptions) {
  return [
    provideIonicAngular(),
    provideHttpClient(
      withFetch(),
      withInterceptors([loadingInterceptor])
    ),
    provideRouter(
      routes,
      withPreloading(PreloadAllModules),
      withRouterConfig({onSameUrlNavigation: 'reload'}),
      withComponentInputBinding(),
      withEnabledBlockingInitialNavigation(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      })
    ),
  ];
}
