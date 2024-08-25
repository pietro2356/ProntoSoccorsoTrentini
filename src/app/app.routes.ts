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
    path: 'favorites',
    loadComponent: () => import('./feature/favorites/favorites.page').then(m => m.FavoritesPage),
    pathMatch: 'full',
  },
  {
    path: 'ps-details/:id',
    loadComponent: () => import('./feature/ps-details/ps-details.page').then(m => m.PsDetailsPage),
  },
  {
    path: '',
    redirectTo: 'homeStatoPS',
    pathMatch: 'full',
  },
  {
    path: '**',
    // loadComponent: () => import('./feature/not-found/not-found-page.component').then(m => m.NotFoundPage),
    redirectTo: 'homeStatoPS',
    pathMatch: 'full',
  },
];
