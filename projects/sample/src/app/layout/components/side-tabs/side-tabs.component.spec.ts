import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTabsComponent } from './side-tabs.component';
import { AthSideTabsModule } from '@bakesaled/athenaeum/side-tabs';
import { SharedModule } from '../../../shared/shared.module';
import { BasicSideTabsExampleComponent } from './examples/basic-side-tabs-example/basic-side-tabs-example.component';

describe('SideTabsComponent', () => {
  let component: SideTabsComponent;
  let fixture: ComponentFixture<SideTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideTabsComponent, BasicSideTabsExampleComponent],
      imports: [AthSideTabsModule, SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
