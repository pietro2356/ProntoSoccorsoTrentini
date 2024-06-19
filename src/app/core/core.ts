import {
  PreloadAllModules,
  provideRouter,
  Routes,
  withComponentInputBinding, withEnabledBlockingInitialNavigation, withInMemoryScrolling,
  withPreloading,
  withRouterConfig
} from "@angular/router";
import {provideIonicAngular} from "@ionic/angular/standalone";
import {provideHttpClient, withFetch} from "@angular/common/http";

export interface CoreOptions {
  routes: Routes;
}

export function provideCore({ routes }: CoreOptions) {
  return [
    provideIonicAngular(),
    provideHttpClient(
      withFetch()
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
