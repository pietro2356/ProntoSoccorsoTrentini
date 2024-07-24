import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';

type ActionButtonColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'medium'
  | 'dark';

@Component({
  selector: 'pst-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IonicModule],
})
export class LinkButtonComponent {
  icon = input<string>();
  text = input.required<string>();
  link = input.required<string>();
  color = input<ActionButtonColor>();
}
