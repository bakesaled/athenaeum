import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AthTableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import { AthNumericColumnComponent } from './numeric-column/numeric-column.component';

@NgModule({
  declarations: [AthTableComponent, AthNumericColumnComponent],
  imports: [CommonModule, MatTableModule],
  exports: [AthTableComponent],
})
export class AthTableModule {}
