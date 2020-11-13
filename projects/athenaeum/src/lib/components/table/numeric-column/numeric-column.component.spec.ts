import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthNumericColumnComponent } from './numeric-column.component';

describe('AthNumericColumnComponent', () => {
  let component: AthNumericColumnComponent<any>;
  let fixture: ComponentFixture<AthNumericColumnComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AthNumericColumnComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AthNumericColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
