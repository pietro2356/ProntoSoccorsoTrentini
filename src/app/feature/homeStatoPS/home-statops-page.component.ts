import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { StatoProntoSoccorso } from '@core/models/statoProntoSoccorso';
import { StatoPSService } from '@core/services/StatoPS/stato-ps.service';
import { CardPSComponent } from '@ui/card-ps/card-ps.component';
import {
  IonAlert,
  IonContent,
  IonFooter,
  IonHeader,
  IonProgressBar,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { AppStateService } from '@core/services/appState/app-state.service';


@Component({
  selector: 'pst-homeStatoPS-statops',
  templateUrl: 'home-statops-page.component.html',
  styleUrls: ['home-statops-page.component.scss'],
  standalone: true,
  imports: [CardPSComponent, IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonProgressBar, IonAlert],
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
}
