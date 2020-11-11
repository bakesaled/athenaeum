import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AthenaeumModule } from '../../../../athenaeum/src/lib/athenaeum.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

export const MATERIAL_MODULES = [
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, AthenaeumModule, MATERIAL_MODULES],
  exports: [AthenaeumModule, MATERIAL_MODULES],
})
export class SharedModule {}
