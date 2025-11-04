import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'triple-room', loadComponent: () => import('./nav1/nav1').then((m) => m.Nav1) },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./homePage/home/home').then((m) => m.Home),
  },
];
