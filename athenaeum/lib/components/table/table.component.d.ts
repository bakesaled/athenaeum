import { OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { AthTableColumnDef } from './table-column-def';
export declare class AthTableComponent<T> implements OnInit {
    private colDefs;
    displayedColumns: string[];
    get columnDefs(): AthTableColumnDef[];
    set columnDefs(newValue: AthTableColumnDef[]);
    dataSource: DataSource<T>;
    constructor();
    ngOnInit(): void;
}
