import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { SharedModule } from '../../../shared/shared.module';
import { BasicCardExampleComponent } from './examples/basic-card-example/basic-card-example.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ListCardExampleComponent } from './examples/list-card-example/list-card-example.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CardComponent,
        BasicCardExampleComponent,
        ListCardExampleComponent,
      ],
      imports: [SharedModule, NoopAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
