import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthenaeumComponent } from './athenaeum.component';

describe('AthenaeumComponent', () => {
  let component: AthenaeumComponent;
  let fixture: ComponentFixture<AthenaeumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthenaeumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AthenaeumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
