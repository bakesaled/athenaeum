import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthTabComponent } from './tab.component';

describe('AthTabComponent', () => {
  let component: AthTabComponent;
  let fixture: ComponentFixture<AthTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AthTabComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AthTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
