import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthTableComponent } from './table.component';

describe('AthTableComponent', () => {
  let component: AthTableComponent;
  let fixture: ComponentFixture<AthTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AthTableComponent],
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
