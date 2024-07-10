import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'pst-app-root',
  template: '<ion-app><ion-router-outlet/></ion-app>',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {}
