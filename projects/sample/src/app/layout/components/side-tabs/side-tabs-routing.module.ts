import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideTabsComponent } from './side-tabs.component';

const routes: Routes = [
  {
    path: '',
    component: SideTabsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SideTabsRoutingModule {}
