import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonTitle,
  IonToolbar,
  ViewWillEnter,
} from '@ionic/angular/standalone';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LinkButtonComponent } from '@ui/link-button/link-button.component';
import { StatoPSService } from '@core/services/StatoPS/stato-ps.service';
import { ProntoSoccorso } from '@core/models/statoProntoSoccorso';
import { toSignal } from '@angular/core/rxjs-interop';
import { ExtractPSPipe } from '@core/pipe/extract-ps.pipe';
import { addIcons } from 'ionicons';
import { arrowBack, at, call, globe, location, mail, medical, navigate } from 'ionicons/icons';
import { WaitingBoxComponent } from '@ui/standard/waiting-box/waiting-box.component';

@Component({
  selector: 'pst-ps-details',
  templateUrl: './ps-details.page.html',
  styleUrls: ['./ps-details.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    LinkButtonComponent,
    RouterLink,
    IonChip,
    IonIcon,
    IonLabel,
    ExtractPSPipe,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    WaitingBoxComponent,
    IonBackButton,
    IonButton,
    IonButtons,
  ],
})
export class PsDetailsPage implements ViewWillEnter {
  readonly #router = inject(ActivatedRoute);
  readonly #statoPsService = inject(StatoPSService);
  routeParam = toSignal(this.#router.paramMap);

  prontoSoccorsoComp = computed<ProntoSoccorso | false>(() => {
    return this.#statoPsService.findPS(this.routeParam()?.get('id') || '');
  });

  constructor() {
    addIcons({ location, medical, navigate, call, globe, mail, at, arrowBack });
  }

  ionViewWillEnter(): void {
    if (this.#statoPsService.prontoSoccorso().length === 0) this.#statoPsService.loadFavPS();
  }

  openTabViaLink(event: Event, url: string) {
    event.preventDefault();
    window.open(url, '_blank');
  }

  getTelephoneLink(tel: string): string {
    if (tel === '') return '';
    const sp = tel.split('-');
    console.trace(sp);

    return tel;
  }
}
