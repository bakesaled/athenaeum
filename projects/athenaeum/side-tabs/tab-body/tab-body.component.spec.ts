import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthTabBodyComponent } from './tab-body.component';
import { PortalModule } from '@angular/cdk/portal';

describe('AthTabBodyComponent', () => {
  let component: AthTabBodyComponent;
  let fixture: ComponentFixture<AthTabBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AthTabBodyComponent],
      imports: [PortalModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AthTabBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
