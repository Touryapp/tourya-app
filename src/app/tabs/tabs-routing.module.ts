import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home-clients',
        loadChildren: () => import('../pages/clients/home-clients/home-clients.module').then(m => m.HomeClientsModule)
      },
      {
        path: 'home-providers',
        loadChildren: () => import('../pages/providers/home-providers/home-providers.module').then(m => m.HomeProvidersModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home-clients',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home-clients',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
