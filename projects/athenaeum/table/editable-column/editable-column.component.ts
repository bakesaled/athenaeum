import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  ViewChild,
  Input,
  Optional,
  EventEmitter,
  Output,
} from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { AthTableColumnDef } from '../table-column-def';
import { EditableColumnEvent } from './editable-column.event';

@Component({
  selector: 'ath-editable-column',
  templateUrl: './editable-column.component.html',
  styleUrls: ['./editable-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AthEditableColumnComponent<T> implements OnInit, OnDestroy {
  @ViewChild(MatColumnDef, { static: true }) matColumnDef: MatColumnDef;

  @Input() athColumnDef: AthTableColumnDef;
  @Output() update: EventEmitter<EditableColumnEvent<T>> = new EventEmitter<
    EditableColumnEvent<T>
  >();

  constructor(@Optional() public table: MatTable<any>) {}

  ngOnInit(): void {
    if (this.matColumnDef) {
      this.matColumnDef.name = this.athColumnDef.columnDefName;
    }
  }

  ngOnDestroy(): void {
    if (this.table) {
      this.table.removeColumnDef(this.matColumnDef);
    }
  }

  onUpdate($event: number, element: T, index: number): void {
    this.update.emit(
      new EditableColumnEvent($event, this.athColumnDef, element, index)
    );
  }
}
