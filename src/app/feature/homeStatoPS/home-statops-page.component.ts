import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { StatoPSService } from '@core/services/StatoPS/stato-ps.service';
import { CardPSComponent } from '@ui/standard/card-ps/card-ps.component';
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
import { CardpsLoaderComponent } from '@ui/loader/cardps-loader/cardps-loader.component';
import { ErrorCardComponent } from '@ui/error/error-card/error-card.component';

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
    CardpsLoaderComponent,
    ErrorCardComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeStatoPSPage implements OnInit {
  #statoPSService = inject(StatoPSService);
  appStateService = inject(AppStateService);
  statoPS = this.#statoPSService.statoPS;

  ngOnInit() {
    this.#statoPSService.getStatoPS();
  }

  refreshData(event: CustomEvent) {
    this.#statoPSService.getStatoPS();

    event.detail.complete();
  }
}
