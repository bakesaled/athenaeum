import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { AthTableColumnDef } from './table-column-def';
import { AthNumericColumnComponent } from './numeric-column/numeric-column.component';
import { MatTable } from '@angular/material/table';
import { AthEditableColumnComponent } from './editable-column/editable-column.component';
import { EditableColumnEvent } from './editable-column/editable-column.event';

/**
 * A data table that displays rows of data.
 */
@Component({
  selector: 'ath-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
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
  @ViewChildren(AthEditableColumnComponent)
  editableColumns: QueryList<AthEditableColumnComponent<T>>;

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

  @Output() update: EventEmitter<EditableColumnEvent<T>> = new EventEmitter<
    EditableColumnEvent<T>
  >();

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.numericColumns.forEach((col) =>
      this.table.addColumnDef(col.matColumnDef)
    );
    this.editableColumns.forEach((col) =>
      this.table.addColumnDef(col.matColumnDef)
    );

    this.displayedColumns = this.athColumnDefs?.map((x) => x.columnDefName);
    this.changeDetector.detectChanges();
  }

  onUpdate($event: EditableColumnEvent<T>): void {
    this.update.emit($event);
  }
}
