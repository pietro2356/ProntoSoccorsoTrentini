import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'pst-cardps-loader',
  templateUrl: './cardps-loader.component.html',
  styleUrls: ['./cardps-loader.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonicModule, SkeletonModule],
})
export class CardpsLoaderComponent {}
