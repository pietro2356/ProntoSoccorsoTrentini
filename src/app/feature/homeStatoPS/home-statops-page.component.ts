import { ChangeDetectionStrategy, Component, inject, model, signal } from '@angular/core';
import { StatoPSService } from '@core/services/StatoPS/stato-ps.service';
import { CardPSComponent } from '@ui/standard/card-ps/card-ps.component';
import {
  IonContent,
  IonFooter,
  IonRefresher,
  IonRefresherContent,
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
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
import { LinkButtonComponent } from '@ui/link-button/link-button.component';
import { FavoritesService } from '@core/services/favorites/favorites.service';
import { TranslatePipe } from '@codeandweb/ngx-translate';
import { InternationalizationService } from '@core/services/Internationalization/internationalization.service';
import { Select } from 'primeng/select';

@Component({
  selector: 'pst-home-statops',
  templateUrl: 'home-statops-page.component.html',
  styleUrls: ['home-statops-page.component.scss'],
  imports: [
    CardPSComponent,
    IonContent,
    IonToolbar,
    IonFooter,
    SkeletonModule,
    IonRefresher,
    IonRefresherContent,
    CardpsLoaderComponent,
    ErrorCardComponent,
    RouterLink,
    FormsModule,
    DropdownModule,
    Select,
    LinkButtonComponent,
    TranslatePipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeStatoPSPage implements ViewWillEnter, ViewDidEnter, ViewDidLeave {
  readonly #statoPSService = inject(StatoPSService);
  readonly appStateService = inject(AppStateService);
  readonly favoitesService = inject(FavoritesService);
  readonly i18nService = inject(InternationalizationService);

  selectedLang = model<string>();

  dataAggiornamento = this.#statoPSService.dataAggiornamento;
  prontoSoccorso = this.#statoPSService.prontoSoccorso;
  listaLocalita = this.#statoPSService.listaLocalita;

  isSearchEnabled = signal<boolean>(false);
  ricercaPS = model<string>();

  readonly currentYear = new Date().getFullYear();

  ionViewWillEnter(): void {
    this.#statoPSService.loadFavPS();
  }

  ionViewDidEnter(): void {
    this.favoitesService.loadFavorites();
    if (this.selectedLang() === undefined) this.selectedLang.set(this.i18nService.selectedLanguageFlag());
  }

  ionViewDidLeave() {
    this.isSearchEnabled.set(false);
    this.ricercaPS.set('');
    this.#statoPSService.clearFilterPS();
  }

  refreshData(event: CustomEvent) {
    this.#statoPSService.loadStatoPS();
    event.detail.complete();
  }

  enableSearch() {
    this.isSearchEnabled.update(prev => !prev);
    if (!this.isSearchEnabled()) {
      this.ricercaPS.set('');
      this.#statoPSService.clearFilterPS();
    }
  }

  search(event: DropdownChangeEvent) {
    this.#statoPSService.filterPS(event.value);
  }

  changeLang(event: DropdownChangeEvent) {
    this.i18nService.changeLanguageWithFlag(event.value);
  }

  protected readonly Date = Date;
}
