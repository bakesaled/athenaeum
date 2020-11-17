import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  ViewChild,
} from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { AthTableColumnDef } from '../table-column-def';

@Component({
  selector: 'ath-numeric-column',
  templateUrl: './numeric-column.component.html',
  styleUrls: ['./numeric-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AthNumericColumnComponent<T> implements OnInit, OnDestroy {
  @ViewChild(MatColumnDef, { static: true }) matColumnDef: MatColumnDef;

  @Input() athColumnDef: AthTableColumnDef;

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
}
