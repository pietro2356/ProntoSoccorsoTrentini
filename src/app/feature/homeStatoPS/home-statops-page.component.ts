import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { StatoPSService } from '@core/services/StatoPS/stato-ps.service';
import { CardPSComponent } from '@ui/card-ps/card-ps.component';
import {
  IonAlert,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonFooter,
  IonHeader,
  IonProgressBar,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { AppStateService } from '@core/services/appState/app-state.service';
import { SkeletonModule } from 'primeng/skeleton';
import { HttpCoreService } from '@core/services/http/http-core.service';

@Component({
  selector: 'pst-home-statops',
  templateUrl: 'home-statops-page.component.html',
  styleUrls: ['home-statops-page.component.scss'],
  standalone: true,
  imports: [
    CardPSComponent,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonFooter,
    IonProgressBar,
    IonAlert,
    SkeletonModule,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonRefresher,
    IonRefresherContent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeStatoPSPage implements OnInit {
  #httpServ = inject(HttpCoreService);
  #statoPSService = inject(StatoPSService);
  appStateService = inject(AppStateService);
  statoPS = this.#statoPSService.statoPS;

  ngOnInit() {
    this.#statoPSService.getStatoPS();
  }

  refreshData(event: CustomEvent) {
    this.statoPS().prontoSoccorso = [];
    this.#statoPSService.getStatoPS();

    event.detail.complete();
  }
}
