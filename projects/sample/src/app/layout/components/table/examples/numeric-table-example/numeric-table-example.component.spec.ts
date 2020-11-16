import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericTableExampleComponent } from './numeric-table-example.component';
import { SharedModule } from '../../../../../shared/shared.module';

describe('NumericTableExampleComponent', () => {
  let component: NumericTableExampleComponent;
  let fixture: ComponentFixture<NumericTableExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumericTableExampleComponent],
      imports: [SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericTableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
