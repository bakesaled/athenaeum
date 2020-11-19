import { AthTableColumnType } from './table-column-type';

export interface AthTableColumnDef {
  columnDefName?: string;
  headerText?: string;
  columnType?: AthTableColumnType;
  editable?: boolean;
}
