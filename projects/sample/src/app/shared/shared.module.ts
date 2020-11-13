import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AthTableModule } from '../../../../athenaeum/src/lib/components/table/table.module';

export const MATERIAL_MODULES = [
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
];

export const ATHENAEUM_MODULES = [AthTableModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ATHENAEUM_MODULES, MATERIAL_MODULES],
  exports: [ATHENAEUM_MODULES, MATERIAL_MODULES],
})
export class SharedModule {}
