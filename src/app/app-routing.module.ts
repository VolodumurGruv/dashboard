import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./user-info/user.module').then((m) => m.UserModule),
      },
      {
        path: 'table',
        loadChildren: () =>
          import('./table/table.module').then((m) => m.TableModule),
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./icons/icons.module').then((m) => m.IconsModule),
      },
      {
        path: 'maps',
        loadChildren: () =>
          import('./maps/maps.module').then((m) => m.MasModule),
      },
      {
        path: 'notification',
        loadChildren: () =>
          import('./notification/notification.module').then(
            (m) => m.NotificationModule
          ),
      },
    ],
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
