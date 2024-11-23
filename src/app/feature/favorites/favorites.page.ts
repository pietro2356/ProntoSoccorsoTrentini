import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonRefresher, IonRefresherContent, ViewWillEnter } from '@ionic/angular/standalone';
import { InputTextModule } from 'primeng/inputtext';
import { StatoPSService } from '@core/services/StatoPS/stato-ps.service';
import { CardPSComponent } from '@ui/standard/card-ps/card-ps.component';
import { DropdownModule } from 'primeng/dropdown';
import { LinkButtonComponent } from '@ui/link-button/link-button.component';
import { RouterLink } from '@angular/router';
import { ErrorCardComponent } from '@ui/error/error-card/error-card.component';
import { TranslatePipe } from '@codeandweb/ngx-translate';
@Component({
  selector: 'pst-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    InputTextModule,
    CardPSComponent,
    DropdownModule,
    LinkButtonComponent,
    RouterLink,
    ErrorCardComponent,
    IonRefresher,
    IonRefresherContent,
    TranslatePipe,
  ],
})
export class FavoritesPage implements ViewWillEnter {
  #statoPsService = inject(StatoPSService);
  psFavorites = this.#statoPsService.prontoSoccorsoFav;

  ionViewWillEnter() {
    this.#statoPsService.loadFavPS();
  }

  refreshData(event: CustomEvent) {
    this.#statoPsService.loadStatoPS();
    event.detail.complete();
  }
}
