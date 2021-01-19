import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardExampleComponent } from './list-card-example.component';
import { SharedModule } from '../../../../../shared/shared.module';

describe('ListCardExampleComponent', () => {
  let component: ListCardExampleComponent;
  let fixture: ComponentFixture<ListCardExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCardExampleComponent],
      imports: [SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCardExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
