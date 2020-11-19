import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthTableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import { AthNumericColumnComponent } from './numeric-column/numeric-column.component';
import { AthEditableColumnComponent } from '@bakesaled/athenaeum/table/editable-column';
import { AthEditableTextComponent } from '@bakesaled/athenaeum/table/editable-text';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

describe('AthTableComponent', () => {
  let component: AthTableComponent<any>;
  let fixture: ComponentFixture<AthTableComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AthTableComponent,
        AthNumericColumnComponent,
        AthEditableColumnComponent,
        AthEditableTextComponent,
      ],
      imports: [
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
      ],
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
