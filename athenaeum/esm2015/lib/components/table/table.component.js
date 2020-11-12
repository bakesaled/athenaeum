import { Component, Input, ViewEncapsulation } from '@angular/core';
export class AthTableComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL2F0aGVuYWV1bS9hdGhlbmFldW0vcHJvamVjdHMvYXRoZW5hZXVtL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWM1RSxNQUFNLE9BQU8saUJBQWlCO0lBaUI1QixnQkFBZSxDQUFDO0lBWmhCLElBQ0ksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxVQUFVLENBQUMsUUFBNkI7O1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsU0FBRyxJQUFJLENBQUMsT0FBTywwQ0FBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBT0QsUUFBUSxLQUFVLENBQUM7OztZQTdCcEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiwyaUJBQXFDO2dCQUVyQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMscURBQXFEO2dCQUNyRCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLFdBQVc7aUJBQ25COzthQUNGOzs7O3lCQU1FLEtBQUs7eUJBU0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHsgQXRoVGFibGVDb2x1bW5EZWYgfSBmcm9tICcuL3RhYmxlLWNvbHVtbi1kZWYnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdGgtdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhdGgtdGFibGUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBBdGhUYWJsZUNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgY29sRGVmczogQXRoVGFibGVDb2x1bW5EZWZbXTtcblxuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXTtcblxuICBASW5wdXQoKVxuICBnZXQgY29sdW1uRGVmcygpOiBBdGhUYWJsZUNvbHVtbkRlZltdIHtcbiAgICByZXR1cm4gdGhpcy5jb2xEZWZzO1xuICB9XG4gIHNldCBjb2x1bW5EZWZzKG5ld1ZhbHVlOiBBdGhUYWJsZUNvbHVtbkRlZltdKSB7XG4gICAgdGhpcy5jb2xEZWZzID0gWy4uLm5ld1ZhbHVlXTtcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSB0aGlzLmNvbERlZnM/Lm1hcCgoeCkgPT4geC5jb2x1bW5EZWZOYW1lKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGRhdGFTb3VyY2U6IERhdGFTb3VyY2U8VD47XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cbn1cbiJdfQ==