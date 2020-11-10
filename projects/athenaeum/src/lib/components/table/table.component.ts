import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';

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
  @Input()
  displayedColumns: string[] = ['the', 'incredible', 'hulk'];

  @Input()
  dataSource: DataSource<T>;

  constructor() {}

  ngOnInit(): void {}
}
