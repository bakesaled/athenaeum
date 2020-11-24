import {
  Directive,
  ElementRef,
  forwardRef,
  HostListener,
  Input,
} from '@angular/core';
import { MAT_INPUT_VALUE_ACCESSOR } from '@angular/material/input';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { formatNumber } from '@angular/common';
import { AthInputValueType } from './input-value-type';

/**
 * A directive that adds helpful behavior to input and textarea elements.
 */
@Directive({
  selector: 'input[athInput], textarea[athInput]',
  exportAs: 'athInput',
  providers: [
    { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: AthInputDirective },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AthInputDirective),
      multi: true,
    },
  ],
  host: {
    class: 'ath-input-element',
    '[style.text-align]': '"right"',
  },
})
export class AthInputDirective {
  private val: string;

  /**
   * Value assigned to the element (MatFormField).
   */
  @Input()
  get value(): string {
    return this.val;
  }

  set value(value: string | null) {
    this.val = value;
    this.formatValue(value);
  }

  locale = 'en-US';

  /**
   * Decimal representation options, specified by a string in the following format:
   * `{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}`.
   */
  @Input()
  digitInfo: string;

  /**
   * Type of value: 'number' or 'text' (default: 'text');
   */
  @Input()
  valueType: AthInputValueType;

  constructor(private elementRef: ElementRef<HTMLInputElement>) {}

  @HostListener('blur')
  onBlur(): void {
    if (this.val) {
      this.formatValue(this.val);
    }
  }

  @HostListener('focus')
  onFocus(): void {
    this.unformatValue();
  }

  @HostListener('input', ['$event.target.value'])
  onInput(value): void {
    if (this.valueType === 'number') {
      this.val = this.unformatNumber(value);
    } else {
      this.val = value;
    }
    this.onChange(this.val);
  }

  writeValue(value: any): void {
    this.val = value;
    if (value) {
      this.formatValue(this.val);
    }
  }

  onChange(_): void {}

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(): void {}

  unformatNumber(target: string): string {
    if (target) {
      return target.replace(/[^\d.-]/g, '');
    } else {
      return '';
    }
  }

  private formatValue(value: any): void {
    if (this.valueType === 'number') {
      this.elementRef.nativeElement.value = formatNumber(
        value,
        this.locale,
        this.digitInfo
      );
    }
  }

  private unformatValue(): void {
    if (this.valueType === 'number') {
      this.elementRef.nativeElement.value = this.unformatNumber(
        this.elementRef.nativeElement.value
      );
    }
  }
}
