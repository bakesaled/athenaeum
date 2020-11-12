import { ɵɵdefineInjectable, Injectable, Component, ViewEncapsulation, Input, NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

class AthenaeumService {
    constructor() { }
}
AthenaeumService.ɵprov = ɵɵdefineInjectable({ factory: function AthenaeumService_Factory() { return new AthenaeumService(); }, token: AthenaeumService, providedIn: "root" });
AthenaeumService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
AthenaeumService.ctorParameters = () => [];

class AthenaeumComponent {
    constructor() { }
    ngOnInit() {
    }
}
AthenaeumComponent.decorators = [
    { type: Component, args: [{
                selector: 'ath-athenaeum',
                template: `
    <p>
      athenaeum works!
    </p>
  `
            },] }
];
AthenaeumComponent.ctorParameters = () => [];

class AthTableComponent {
    constructor() { }
    get columnDefs() {
        return this.colDefs;
    }
    set columnDefs(newValue) {
        var _a;
        this.colDefs = [...newValue];
        this.displayedColumns = (_a = this.colDefs) === null || _a === void 0 ? void 0 : _a.map((x) => x.columnDefName);
    }
    ngOnInit() { }
}
AthTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'ath-table',
                template: "<table mat-table [dataSource]=\"dataSource\">\n  <ng-container *ngFor=\"let colName of displayedColumns; let index = index\">\n    <ng-container [matColumnDef]=\"colName\">\n      <th mat-header-cell *matHeaderCellDef>{{ colName }}</th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{ element[columnDefs[index].columnDefName] }}\n      </td>\n    </ng-container>\n  </ng-container>\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n</table>\n",
                encapsulation: ViewEncapsulation.None,
                // tslint:disable-next-line:no-host-metadata-property
                host: {
                    class: 'ath-table',
                },
                styles: [".ath-table table{width:100%}"]
            },] }
];
AthTableComponent.ctorParameters = () => [];
AthTableComponent.propDecorators = {
    columnDefs: [{ type: Input }],
    dataSource: [{ type: Input }]
};

class AthenaeumModule {
}
AthenaeumModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AthenaeumComponent, AthTableComponent],
                imports: [MatTableModule, CommonModule],
                exports: [AthenaeumComponent, AthTableComponent],
            },] }
];

/*
 * Public API Surface of athenaeum
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AthTableComponent, AthenaeumComponent, AthenaeumModule, AthenaeumService, AthTableComponent as ɵa };
//# sourceMappingURL=athenaeum.js.map
