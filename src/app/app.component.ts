import { Component, inject, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet, Platform } from '@ionic/angular/standalone';
import { App as CapacitorApp } from '@capacitor/app';

@Component({
  selector: 'pst-app-root',
  template: '<ion-app><ion-router-outlet/></ion-app>',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  platform = inject(Platform);

  ngOnInit(): void {
    CapacitorApp.addListener('backButton', ({ canGoBack }) => {
      if (!canGoBack) {
        CapacitorApp.exitApp();
      }
    });
  }
}
