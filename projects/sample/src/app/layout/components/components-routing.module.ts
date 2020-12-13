import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
  },
  {
    path: 'table',
    loadChildren: () =>
      import('./table/table.module').then((m) => m.TableModule),
  },
  {
    path: 'input',
    loadChildren: () =>
      import('./input/input.module').then((m) => m.InputModule),
  },
  {
    path: 'side-tabs',
    loadChildren: () =>
      import('./side-tabs/side-tabs.module').then((m) => m.SideTabsModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
