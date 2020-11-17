import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AthTableColumnDef } from '@bakesaled/athenaeum/table';
import { MatTableDataSource } from '@angular/material/table';

export interface Cryptocurrency {
  name: string;
  symbol: string;
  price: number;
  change: number;
  cap: number;
}

const SAMPLE_DATA: Cryptocurrency[] = [
  { name: 'Bitcoin', symbol: 'XBT', price: 15327, change: 0.15, cap: 284.2 },
  { name: 'Ethereum', symbol: 'ETH', price: 452.35, change: 1.73, cap: 51.2 },
  { name: 'Tether USD', symbol: 'USDT', price: 1.0, change: 0.07, cap: 17.4 },
];

@Component({
  selector: 'app-numeric-table-example',
  templateUrl: './numeric-table-example.component.html',
  styleUrls: ['./numeric-table-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumericTableExampleComponent implements OnInit {
  tableColumnDefs: AthTableColumnDef[] = [
    {
      columnDefName: 'name',
      headerText: 'name',
      columnType: 'text',
    },
    {
      columnDefName: 'symbol',
      headerText: 'symbol',
      columnType: 'text',
    },
    {
      columnDefName: 'price',
      headerText: 'price',
      columnType: 'numeric',
    },
    {
      columnDefName: 'change',
      headerText: 'change',
      columnType: 'numeric',
    },
    {
      columnDefName: 'cap',
      headerText: 'cap',
      columnType: 'numeric',
    },
  ];
  dataSource = new MatTableDataSource(SAMPLE_DATA);

  constructor() {}

  ngOnInit(): void {}
}
