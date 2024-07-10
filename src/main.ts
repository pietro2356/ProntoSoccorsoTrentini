import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from '@env/environment';
import { appConfig } from './app/app.config';

if (environment.production) {
  enableProdMode();
}

// TODO: Sostituire il console.error con un logger
bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
