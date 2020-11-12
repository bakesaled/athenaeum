import { NgModule } from '@angular/core';
import { AthenaeumComponent } from './athenaeum.component';
import { AthTableComponent } from './components';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
export class AthenaeumModule {
}
AthenaeumModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AthenaeumComponent, AthTableComponent],
                imports: [MatTableModule, CommonModule],
                exports: [AthenaeumComponent, AthTableComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRoZW5hZXVtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9hdGhlbmFldW0vYXRoZW5hZXVtL3Byb2plY3RzL2F0aGVuYWV1bS9zcmMvIiwic291cmNlcyI6WyJsaWIvYXRoZW5hZXVtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTy9DLE1BQU0sT0FBTyxlQUFlOzs7WUFMM0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDO2dCQUNyRCxPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDO2dCQUN2QyxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQzthQUNqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdGhlbmFldW1Db21wb25lbnQgfSBmcm9tICcuL2F0aGVuYWV1bS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXRoVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTWF0VGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtBdGhlbmFldW1Db21wb25lbnQsIEF0aFRhYmxlQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW01hdFRhYmxlTW9kdWxlLCBDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbQXRoZW5hZXVtQ29tcG9uZW50LCBBdGhUYWJsZUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEF0aGVuYWV1bU1vZHVsZSB7fVxuIl19