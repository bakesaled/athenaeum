import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NavListItemComponent } from './sidenav/nav-list-item/nav-list-item.component';

@NgModule({
  declarations: [SidenavComponent, NavListItemComponent],
  exports: [SidenavComponent],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class NavigationModule {}
