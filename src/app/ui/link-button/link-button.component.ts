import { Component, input } from '@angular/core';
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
  imports: [IonicModule, ButtonModule],
  standalone: true,
})
export class LinkButtonComponent {
  icon = input<string>();
  text = input.required<string>();
  link = input<string>();
  severity = input<Severity>();
}
