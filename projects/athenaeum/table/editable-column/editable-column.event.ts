// import { AthTableColumnDef } from '@bakesaled/athenaeum/table';

import { AthTableColumnDef } from '../table-column-def';

export class EditableColumnEvent<T> {
  constructor(
    public value: any,
    public athColumnDef: AthTableColumnDef,
    public element: T,
    public rowIndex: number
  ) {}
}
