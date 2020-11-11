import { Component } from '@angular/core';
import { AthTableColumnDef } from '../../../athenaeum/src/lib/components/table/table-column-def';
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sample';
  tableColumnDefs: AthTableColumnDef[] = [
    {
      columnDefName: 'name',
      headerText: 'name',
    },
    {
      columnDefName: 'symbol',
      headerText: 'symbol',
    },
    {
      columnDefName: 'price',
      headerText: 'price',
    },
    {
      columnDefName: 'change',
      headerText: 'change',
    },
    {
      columnDefName: 'cap',
      headerText: 'cap',
    },
  ];
  dataSource = new MatTableDataSource(SAMPLE_DATA);
}
