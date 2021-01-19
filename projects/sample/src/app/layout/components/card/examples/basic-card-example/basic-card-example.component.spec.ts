import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCardExampleComponent } from './basic-card-example.component';
import { SharedModule } from '../../../../../shared/shared.module';

describe('BasicCardExampleComponent', () => {
  let component: BasicCardExampleComponent;
  let fixture: ComponentFixture<BasicCardExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicCardExampleComponent],
      imports: [SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCardExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
