import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { SharedModule } from '../../../shared/shared.module';
import { BasicTableExampleComponent } from './examples/basic-table-example/basic-table-example.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NumericTableExampleComponent } from './examples/numeric-table-example/numeric-table-example.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TableComponent,
        BasicTableExampleComponent,
        NumericTableExampleComponent,
      ],
      imports: [SharedModule, NoopAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
