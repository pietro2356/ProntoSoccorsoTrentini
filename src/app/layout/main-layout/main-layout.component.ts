import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonContent, IonFooter, IonHeader, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'pst-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter],
})
export class MainLayoutComponent{}
