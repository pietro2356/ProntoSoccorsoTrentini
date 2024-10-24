import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LinkButtonComponent } from '@ui/link-button/link-button.component';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { TranslatePipe } from '@codeandweb/ngx-translate';

@Component({
  selector: 'pst-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
  standalone: true,
  imports: [LinkButtonComponent, RouterLink, IonContent, IonHeader, IonTitle, IonToolbar, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoPage {}
