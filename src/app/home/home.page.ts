import { Component, inject, signal } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenu,
  IonButtons,
  IonMenuButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonFooter,
} from '@ionic/angular/standalone';
import { StatoProntoSoccorso } from '@core/models/statoProntoSoccorso';
import { StatoPSService } from '@core/services/StatoPS/stato-ps.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonMenu,
    IonButtons,
    IonMenuButton,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonFooter,
  ],
})
export class HomePage {
  #statoPSService = inject(StatoPSService);
  statoPS = signal<StatoProntoSoccorso>({} as StatoProntoSoccorso);

  constructor() {
    this.#statoPSService.getStatoPS().subscribe(statoPS => {
      this.statoPS.set(statoPS as StatoProntoSoccorso);
    });
  }
}
