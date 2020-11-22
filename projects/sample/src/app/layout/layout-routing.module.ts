import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutGuard } from './layout.guard';
import { GetStartedComponent } from './get-started/get-started.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [LayoutGuard],
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'get-started',
        component: GetStartedComponent,
      },
      {
        path: 'components',
        loadChildren: () =>
          import('./components/components.module').then(
            (m) => m.ComponentsModule
          ),
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
