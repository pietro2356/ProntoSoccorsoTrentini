import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'homeStatoPS',
    loadComponent: () => import('./feature/homeStatoPS/home-statops-page.component').then(m => m.HomeStatoPSPage),
  },
  {
    path: 'info',
    loadComponent: () => import('./feature/info/info.page').then(m => m.InfoPage),
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'homeStatoPS',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () => import('./feature/not-found/not-found-page.component').then(m => m.NotFoundPage),
    pathMatch: 'full',
  },
];
