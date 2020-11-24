import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericInputExampleComponent } from './numeric-input-example.component';
import { SharedModule } from '../../../../../shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('NumericInputExampleComponent', () => {
  let component: NumericInputExampleComponent;
  let fixture: ComponentFixture<NumericInputExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumericInputExampleComponent],
      imports: [SharedModule, NoopAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
