import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { NavigationModule } from './navigation/navigation.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [LayoutComponent, DashboardComponent],
  imports: [CommonModule, LayoutRoutingModule, SharedModule, NavigationModule],
})
export class LayoutModule {}
