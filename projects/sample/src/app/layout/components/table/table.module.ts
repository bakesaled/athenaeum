import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { SharedModule } from '../../../shared/shared.module';
import { TableRoutingModule } from './table-routing.module';
import { BasicTableExampleComponent } from './examples/basic-table-example/basic-table-example.component';
import { NumericTableExampleComponent } from './examples/numeric-table-example/numeric-table-example.component';

@NgModule({
  declarations: [TableComponent, BasicTableExampleComponent, NumericTableExampleComponent],
  imports: [CommonModule, SharedModule, TableRoutingModule],
})
export class TableModule {}
