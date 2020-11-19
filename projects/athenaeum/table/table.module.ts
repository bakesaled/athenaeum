import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AthTableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import { AthNumericColumnComponent } from './numeric-column/numeric-column.component';
import { AthEditableColumnComponent } from './editable-column/editable-column.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AthEditableTextComponent } from './editable-text/editable-text.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FocusableDirective } from '@bakesaled/athenaeum/table/editable-text/focusable.directive';

@NgModule({
  declarations: [
    AthTableComponent,
    AthNumericColumnComponent,
    AthEditableColumnComponent,
    AthEditableTextComponent,
    FocusableDirective,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [AthTableComponent],
})
export class AthTableModule {}
