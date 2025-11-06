import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'nav4/triple-room', loadComponent: () => import('./nav1/nav1').then((m) => m.Nav1) },
  {
    path: 'nav4/apartment',
    pathMatch: 'full',
    loadComponent: () => import('./apartment/apartment').then((m) => m.Apartment),
  },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
];
