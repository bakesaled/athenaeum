import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthTabHeaderComponent } from './tab-header.component';

describe('AthTabHeaderComponent', () => {
  let component: AthTabHeaderComponent;
  let fixture: ComponentFixture<AthTabHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AthTabHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AthTabHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
