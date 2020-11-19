import { AthTableColumnDef } from '../../../../dist/athenaeum/table';

export class EditableColumnEvent<T> {
  constructor(
    public value: any,
    public athColumnDef: AthTableColumnDef,
    public element: T,
    public rowIndex: number
  ) {}
}
