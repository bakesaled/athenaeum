import { AthCardComponent, AthCardModule } from '@bakesaled/athenaeum/card';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('AthCardComponent', () => {
  let component: AthCardComponent;
  let fixture: ComponentFixture<AthCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [AthCardModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AthCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
