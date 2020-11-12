import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavListItemComponent } from './nav-list-item.component';
import { NavigationModule } from '../../navigation.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavListItemComponent', () => {
  let component: NavListItemComponent;
  let fixture: ComponentFixture<NavListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
