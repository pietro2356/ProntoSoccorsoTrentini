import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { StatoProntoSoccorso } from '@core/models/statoProntoSoccorso';
import { StatoPSService } from '@core/services/StatoPS/stato-ps.service';
import { CardPSComponent } from '@ui/card-ps/card-ps.component';
import {
  IonAlert, IonCard, IonCardContent, IonCardHeader, IonCardTitle,
  IonContent,
  IonFooter,
  IonHeader,
  IonProgressBar, IonRefresher, IonRefresherContent,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { AppStateService } from '@core/services/appState/app-state.service';
import { SkeletonModule } from 'primeng/skeleton';
import { catchError } from 'rxjs';


@Component({
  selector: 'pst-homeStatoPS-statops',
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
export class HomeStatoPSPage {
  #statoPSService = inject(StatoPSService);
  appStateService = inject(AppStateService);
  statoPS = signal<StatoProntoSoccorso>({} as StatoProntoSoccorso);

  constructor() {
    this.#statoPSService.getStatoPS().subscribe(statoPS => {
      this.statoPS.set(statoPS as StatoProntoSoccorso);
    });
  }

  refreshData(event: CustomEvent) {
    this.statoPS().prontoSoccorso = [];
    this.#statoPSService.getStatoPS()
      .pipe(
        catchError((err) => {
          event.detail.complete();
          throw err;
        })
      )
      .subscribe((statoPS: StatoProntoSoccorso) => {
      let oraAgg = this.statoPS().dataAggiornamento;
      this.statoPS.set(statoPS as StatoProntoSoccorso);

      if (oraAgg === this.statoPS().dataAggiornamento) {
        // TODO: show alert
      }

      event.detail.complete();
    });
  }
}
