import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { AthTableColumnDef } from './table-column-def';
import { AthNumericColumnComponent } from './numeric-column/numeric-column.component';
import { MatTable } from '@angular/material/table';

/**
 * A data table that displays rows of data.
 */
@Component({
  selector: 'ath-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    class: 'ath-table',
  },
})
export class AthTableComponent<T> implements OnInit, AfterViewInit {
  /**
   * Gets assigned later
   */
  displayedColumns: string[];

  @ViewChildren(AthNumericColumnComponent)
  numericColumns: QueryList<AthNumericColumnComponent<T>>;

  @ViewChild(MatTable, { static: true }) table: MatTable<T>;

  /**
   * Column definitions.
   */
  @Input()
  athColumnDefs: AthTableColumnDef[];

  /**
   * Datasource.
   */
  @Input() dataSource: DataSource<T>;

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.numericColumns.forEach((numericCol) =>
      this.table.addColumnDef(numericCol.matColumnDef)
    );

    this.displayedColumns = this.athColumnDefs?.map((x) => x.columnDefName);
    this.changeDetector.detectChanges();
  }
}
