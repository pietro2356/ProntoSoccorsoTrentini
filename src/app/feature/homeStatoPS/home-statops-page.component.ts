import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
  ViewWillEnter,
} from '@ionic/angular/standalone';
import { AppStateService } from '@core/services/appState/app-state.service';
import { SkeletonModule } from 'primeng/skeleton';
import { CardpsLoaderComponent } from '@ui/loader/cardps-loader/cardps-loader.component';
import { ErrorCardComponent } from '@ui/error/error-card/error-card.component';
import { RouterLink } from '@angular/router';
import { LinkButtonComponent } from '@ui/link-button/link-button.component';

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
    RouterLink,
    LinkButtonComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeStatoPSPage implements ViewWillEnter {
  #statoPSService = inject(StatoPSService);
  appStateService = inject(AppStateService);
  statoPS = this.#statoPSService.statoPS;

  ionViewWillEnter(): void {
    this.#statoPSService.loadStatoPS();
  }

  refreshData(event: CustomEvent) {
    this.#statoPSService.loadStatoPS();
    event.detail.complete();
  }
}
