import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'homeStatoPS',
    loadComponent: () => import('./feature/homeStatoPS/home-statops-page.component').then((m) => m.HomeStatoPSPage),
  },
  {
    path: '',
    redirectTo: 'homeStatoPS',
    pathMatch: 'full',
  },
];
