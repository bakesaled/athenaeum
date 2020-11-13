import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthTableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import { AthNumericColumnComponent } from './numeric-column/numeric-column.component';

describe('AthTableComponent', () => {
  let component: AthTableComponent<any>;
  let fixture: ComponentFixture<AthTableComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AthTableComponent, AthNumericColumnComponent],
      imports: [MatTableModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AthTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
