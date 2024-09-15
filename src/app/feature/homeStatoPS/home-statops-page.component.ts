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
  IonInput,
  IonItem,
  IonProgressBar,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  ViewDidEnter,
  ViewDidLeave,
  ViewWillEnter,
} from '@ionic/angular/standalone';
import { AppStateService } from '@core/services/appState/app-state.service';
import { SkeletonModule } from 'primeng/skeleton';
import { CardpsLoaderComponent } from '@ui/loader/cardps-loader/cardps-loader.component';
import { ErrorCardComponent } from '@ui/error/error-card/error-card.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { UpperCasePipe } from '@angular/common';
import { LinkButtonComponent } from '@ui/link-button/link-button.component';
import { FavoritesService } from '@core/services/favorites/favorites.service';

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
    FormsModule,
    IonItem,
    IonInput,
    DropdownModule,
    UpperCasePipe,
    LinkButtonComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeStatoPSPage implements ViewWillEnter, ViewDidEnter, ViewDidLeave {
  #statoPSService = inject(StatoPSService);
  appStateService = inject(AppStateService);
  favoitesService = inject(FavoritesService);
  dataAggiornamento = this.#statoPSService.dataAggiornamento;
  prontoSoccorso = this.#statoPSService.prontoSoccorso;
  listaLocalita = this.#statoPSService.listaLocalita;

  isSearchEnabled = false;
  ricercaPS = ''.toUpperCase();

  ionViewWillEnter(): void {
    this.#statoPSService.loadFavPS();
  }

  ionViewDidEnter(): void {
    this.favoitesService.loadFavorites();
  }

  ionViewDidLeave() {
    this.isSearchEnabled = !this.isSearchEnabled;
    this.ricercaPS = '';
    this.#statoPSService.clearFilterPS();
  }

  refreshData(event: CustomEvent) {
    this.#statoPSService.loadStatoPS();
    event.detail.complete();
  }

  enableSearch() {
    this.isSearchEnabled = !this.isSearchEnabled;
    if (!this.isSearchEnabled) {
      this.ricercaPS = '';
      this.#statoPSService.clearFilterPS();
    }
  }

  search() {
    this.#statoPSService.filterPS(this.ricercaPS);
  }
}
