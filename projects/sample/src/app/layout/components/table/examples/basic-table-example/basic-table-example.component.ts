import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
  selector: 'app-basic-table-example',
  templateUrl: './basic-table-example.component.html',
  styleUrls: ['./basic-table-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicTableExampleComponent implements OnInit {
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
      columnType: 'text',
    },
    {
      columnDefName: 'change',
      headerText: 'change',
      columnType: 'text',
    },
    {
      columnDefName: 'cap',
      headerText: 'cap',
      columnType: 'text',
    },
  ];
  dataSource = new MatTableDataSource(SAMPLE_DATA);

  constructor() {}

  ngOnInit(): void {}
}
