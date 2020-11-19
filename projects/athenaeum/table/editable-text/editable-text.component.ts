import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ElementRef,
  OnDestroy,
  AfterViewInit,
  ChangeDetectorRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { switchMapTo, takeUntil } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ath-editable-text',
  templateUrl: './editable-text.component.html',
  styleUrls: ['./editable-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'ath-editable-text',
  },
})
export class AthEditableTextComponent
  implements OnInit, AfterViewInit, OnDestroy {
  private destroySubject = new Subject();
  private hostElementWidth;
  private inputVal: string;

  editModeSubject = new BehaviorSubject<boolean>(false);

  editMode$ = this.editModeSubject.asObservable();

  @Output() update: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  get value(): string {
    return this.inputVal;
  }
  set value(val: string) {
    this.inputVal = val;
    this.inputFormGroup.controls.input.setValue(val);
    this.changeDetector.detectChanges();
  }
  inputFormGroup: FormGroup;

  constructor(
    private hostEl: ElementRef,
    private changeDetector: ChangeDetectorRef
  ) {
    this.inputFormGroup = new FormGroup({
      input: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.editModeHandler();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.hostElementWidth = this.hostEl.nativeElement.offsetWidth;
    });
  }

  ngOnDestroy(): void {
    this.destroySubject.next();
  }

  private editModeHandler(): void {
    const clickOutside$ = fromEvent(document, 'click').pipe();

    this.editMode$
      .pipe(switchMapTo(clickOutside$), takeUntil(this.destroySubject))
      .subscribe((val) => {
        if (
          this.isOrContainsClickTarget(
            this.hostEl.nativeElement,
            val.target as HTMLElement
          )
        ) {
          this.toEditMode();
        }
      });
  }

  toEditMode(): void {
    if (!this.editModeSubject.getValue()) {
      this.editModeSubject.next(true);
    }
  }

  toViewMode(): void {
    // Only fire if in edit mode
    if (this.editModeSubject.getValue()) {
      // Only fire update if value has changed
      if (this.inputVal !== this.inputFormGroup.value.input) {
        this.inputVal = this.inputFormGroup.value.input;
        this.update.emit(this.inputFormGroup.value.input);
      }

      this.editModeSubject.next(false);
    }
  }

  getWidth(): string {
    this.hostEl.nativeElement.parentElement.style.width = `${this.hostElementWidth}px`;

    // Subtract 2 for border.
    return `${this.hostElementWidth - 2}px`;
  }

  onBlur(): void {
    this.toViewMode();
  }

  onSubmit(): void {
    this.toViewMode();
  }

  private isOrContainsClickTarget(
    element: HTMLElement,
    clickTarget: HTMLElement
  ): boolean {
    return element === clickTarget || element.contains(clickTarget);
  }
}
