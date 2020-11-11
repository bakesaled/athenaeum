import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class NavigationModule {}
