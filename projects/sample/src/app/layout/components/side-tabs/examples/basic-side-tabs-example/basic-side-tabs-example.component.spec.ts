import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSideTabsExampleComponent } from './basic-side-tabs-example.component';
import { AthSideTabsModule } from '@bakesaled/athenaeum/side-tabs';

describe('BasicSideTabsExampleComponent', () => {
  let component: BasicSideTabsExampleComponent;
  let fixture: ComponentFixture<BasicSideTabsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicSideTabsExampleComponent],
      imports: [AthSideTabsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicSideTabsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
