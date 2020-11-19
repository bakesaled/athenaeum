import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthEditableTextComponent } from './editable-text.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('EditableTextComponent', () => {
  let component: AthEditableTextComponent;
  let fixture: ComponentFixture<AthEditableTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AthEditableTextComponent],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AthEditableTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should render in view mode', () => {
    const textEl = fixture.elementRef.nativeElement.querySelector('form');
    expect(textEl).toBeNull();
  });

  it('should render in edit mode', () => {
    component.editModeSubject.next(true);
    fixture.detectChanges();
    const textEl = fixture.elementRef.nativeElement.querySelector('form');
    expect(textEl).not.toBeNull();
  });
});
