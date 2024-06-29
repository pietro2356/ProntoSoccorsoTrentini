import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { StatoProntoSoccorso } from '@core/models/statoProntoSoccorso';
import { StatoPSService } from '@core/services/StatoPS/stato-ps.service';
import { CardPSComponent } from '@ui/card-ps/card-ps.component';
import { IonContent, IonFooter, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';


@Component({
  selector: 'pst-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CardPSComponent, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
