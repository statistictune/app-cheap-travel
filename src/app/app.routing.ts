import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AuthComponent } from './auth/auth.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        loadChildren:
          () => import('./auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'place/:id',
        loadChildren:
          () => import('./place/place.module').then(m => m.PlaceModule)
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];
