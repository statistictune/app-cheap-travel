import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AuthComponent, AuthGuard } from './auth/auth.component';

export const AppRoutes: Routes = [{
  path: 'auth',
  component: AuthComponent,
},
{
  path: '',
  component: FullComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      loadChildren:
        () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'auth',
      loadChildren:
        () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
      path: 'place',
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
