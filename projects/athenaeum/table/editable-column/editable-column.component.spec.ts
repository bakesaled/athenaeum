import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthEditableColumnComponent } from './editable-column.component';
import { AthEditableTextComponent } from '@bakesaled/athenaeum/table/editable-text';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

describe('EditableColumnComponent', () => {
  let component: AthEditableColumnComponent<any>;
  let fixture: ComponentFixture<AthEditableColumnComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AthEditableColumnComponent, AthEditableTextComponent],
      imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AthEditableColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
