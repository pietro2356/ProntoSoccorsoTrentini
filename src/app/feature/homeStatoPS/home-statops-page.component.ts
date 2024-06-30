import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { StatoProntoSoccorso } from '@core/models/statoProntoSoccorso';
import { StatoPSService } from '@core/services/StatoPS/stato-ps.service';
import { CardPSComponent } from '@ui/card-ps/card-ps.component';
import { IonContent, IonFooter, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';


@Component({
  selector: 'pst-homeStatoPS-statops',
  templateUrl: 'home-statops-page.component.html',
  styleUrls: ['home-statops-page.component.scss'],
  standalone: true,
  imports: [CardPSComponent, IonContent, IonHeader, IonTitle, IonToolbar, IonFooter],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeStatoPSPage {
  #statoPSService = inject(StatoPSService);
  statoPS = signal<StatoProntoSoccorso>({} as StatoProntoSoccorso);

  constructor() {
    this.#statoPSService.getStatoPS().subscribe(statoPS => {
      this.statoPS.set(statoPS as StatoProntoSoccorso);
    });
  }
}
