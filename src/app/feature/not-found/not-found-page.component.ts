import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { LinkButtonComponent } from '@ui/link-button/link-button.component';

@Component({
  selector: 'pst-not-found',
  imports: [RouterLink, IonContent, IonHeader, IonTitle, IonToolbar, LinkButtonComponent],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPage {}
