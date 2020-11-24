import { AthInputDirective } from './input.directive';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <mat-form-field>
      <input matInput athInput placeholder="Enter text here" />
    </mat-form-field>
  `,
})
class AthInputTestComponent {}

describe('InputDirective', () => {
  let fixture: ComponentFixture<AthInputTestComponent>;
  let componentInstance: AthInputTestComponent;
  let containerElement: HTMLElement;
  let directive: AthInputDirective;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AthInputDirective, AthInputTestComponent],
        imports: [
          MatInputModule,
          FormsModule,
          MatFormFieldModule,
          NoopAnimationsModule,
        ],
      });

      fixture = TestBed.createComponent(AthInputTestComponent);
      componentInstance = fixture.debugElement.componentInstance;
      containerElement = fixture.debugElement.query(By.css('input'))
        .nativeElement;
      const debugEl = fixture.debugElement.query(
        By.directive(AthInputDirective)
      );
      directive = debugEl.injector.get(AthInputDirective);
    })
  );

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });

  it('should render', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should unformat number', () => {
    let result = directive.unformatNumber('1,234');
    expect(result).toBe('1234');
    result = directive.unformatNumber('1,234.56');
    expect(result).toBe('1234.56');
    result = directive.unformatNumber('123');
    expect(result).toBe('123');
  });

  it('should return 0 if unformatting null', () => {
    let result = directive.unformatNumber(null);
    expect(result).toBe('');
    result = directive.unformatNumber(undefined);
    expect(result).toBe('');
  });
});
