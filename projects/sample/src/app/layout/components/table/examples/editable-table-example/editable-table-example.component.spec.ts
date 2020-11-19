import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableTableExampleComponent } from './editable-table-example.component';
import { SharedModule } from '../../../../../shared/shared.module';

describe('EditableTableExampleComponent', () => {
  let component: EditableTableExampleComponent;
  let fixture: ComponentFixture<EditableTableExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditableTableExampleComponent],
      imports: [SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableTableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
