import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { AthTableColumnDef } from './table-column-def';

@Component({
  selector: 'ath-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    class: 'ath-table',
  },
})
export class AthTableComponent<T> implements OnInit {
  private colDefs: AthTableColumnDef[];

  displayedColumns: string[];

  @Input()
  get columnDefs(): AthTableColumnDef[] {
    return this.colDefs;
  }
  set columnDefs(newValue: AthTableColumnDef[]) {
    this.colDefs = [...newValue];
    this.displayedColumns = this.colDefs?.map((x) => x.columnDefName);
  }

  @Input()
  dataSource: DataSource<T>;

  constructor() {}

  ngOnInit(): void {}
}
