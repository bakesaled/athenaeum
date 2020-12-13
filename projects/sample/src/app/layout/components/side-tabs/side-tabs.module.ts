import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideTabsRoutingModule } from './side-tabs-routing.module';
import { SideTabsComponent } from './side-tabs.component';
import { BasicSideTabsExampleComponent } from './examples/basic-side-tabs-example/basic-side-tabs-example.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [SideTabsComponent, BasicSideTabsExampleComponent],
  imports: [CommonModule, SideTabsRoutingModule, SharedModule],
})
export class SideTabsModule {}
