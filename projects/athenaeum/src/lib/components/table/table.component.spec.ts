import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthTableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';

describe('AthTableComponent', () => {
  let component: AthTableComponent<any>;
  let fixture: ComponentFixture<AthTableComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AthTableComponent],
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