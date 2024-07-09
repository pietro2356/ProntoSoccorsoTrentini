import { ChangeDetectionStrategy, Component, inject, OnInit,} from '@angular/core';
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
import { HttpCoreService } from '@core/services/http/http-core.service';
import { retry } from 'rxjs';


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
export class HomeStatoPSPage implements OnInit {
  #httpServ = inject(HttpCoreService);
  #statoPSService = inject(StatoPSService);
  appStateService = inject(AppStateService);
  statoPS = this.#statoPSService.statoPS;

  ngOnInit() {
    this.#statoPSService.getStatPS();
    console.log(this.statoPS);

    let tt = 0;
    var cc= 0;

    this.#httpServ.get('https://api.trentinoaa.it/').pipe(
      retry(2)
    ).subscribe((data) =>{
      console.log(data);
    });
  }

  refreshData(event: CustomEvent) {
    this.statoPS().prontoSoccorso = [];
    this.#statoPSService.getStatPS();

    event.detail.complete();
  }
}
