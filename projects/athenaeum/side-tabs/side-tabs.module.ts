import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AthSideTabsComponent } from './side-tabs.component';
import { AthTabHeaderComponent } from './tab-header/tab-header.component';
import { AthTabBodyComponent } from './tab-body/tab-body.component';
import { AthTabComponent } from './tab/tab.component';
import { PortalModule } from '@angular/cdk/portal';
import { MatRippleModule } from '@angular/material/core';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  declarations: [
    AthSideTabsComponent,
    AthTabHeaderComponent,
    AthTabBodyComponent,
    AthTabComponent,
  ],
  imports: [CommonModule, PortalModule, MatRippleModule, A11yModule],
  exports: [
    AthSideTabsComponent,
    AthTabComponent,
    AthTabHeaderComponent,
    AthTabBodyComponent,
  ],
})
export class AthSideTabsModule {}
