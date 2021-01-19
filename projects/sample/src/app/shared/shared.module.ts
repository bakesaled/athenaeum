import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AthTableModule } from '@bakesaled/athenaeum/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { AthInputModule } from '@bakesaled/athenaeum/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AthSideTabsModule } from '@bakesaled/athenaeum/side-tabs';
import { AthCardModule } from '@bakesaled/athenaeum/card';

export const MATERIAL_MODULES = [
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatExpansionModule,
  MatGridListModule,
  MatCardModule,
  MatSlideToggleModule,
  MatInputModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  MatButtonToggleModule,
];

export const ATHENAEUM_MODULES = [
  AthTableModule,
  AthInputModule,
  AthSideTabsModule,
  AthCardModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ATHENAEUM_MODULES, MATERIAL_MODULES],
  exports: [ATHENAEUM_MODULES, MATERIAL_MODULES],
})
export class SharedModule {}
