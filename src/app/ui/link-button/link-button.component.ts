import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ButtonModule } from 'primeng/button';

type Severity =
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'help'
  | 'primary'
  | 'secondary'
  | 'contrast'
  | null
  | undefined;

@Component({
  selector: 'pst-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IonicModule, ButtonModule],
})
export class LinkButtonComponent {
  icon = input<string>();
  text = input.required<string>();
  link = input<string>();
  severity = input<Severity>();
}
