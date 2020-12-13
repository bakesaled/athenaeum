import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthSideTabsComponent } from './side-tabs.component';
import { AthSideTabsModule } from '@bakesaled/athenaeum/side-tabs/side-tabs.module';

describe('AthSideTabsComponent', () => {
  let component: AthSideTabsComponent;
  let fixture: ComponentFixture<AthSideTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [AthSideTabsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AthSideTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
