import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'pst-not-found',
  standalone: true,
  imports: [RouterLink, IonContent, IonHeader, IonTitle, IonToolbar],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPage {}
