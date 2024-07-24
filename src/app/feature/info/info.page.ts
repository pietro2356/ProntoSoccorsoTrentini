import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LinkButtonComponent } from '@ui/link-button/link-button.component';

@Component({
  selector: 'pst-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLinkActive, RouterLink, LinkButtonComponent],
})
export class InfoPage {}
