import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LinkButtonComponent } from '@ui/link-button/link-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'pst-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
  standalone: true,
  imports: [IonicModule, LinkButtonComponent, RouterLink],
})
export class InfoPage {}
