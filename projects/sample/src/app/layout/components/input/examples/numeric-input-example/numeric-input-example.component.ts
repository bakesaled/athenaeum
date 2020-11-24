import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';

type Operator = {
  id: string;
  text?: string;
};

@Component({
  selector: 'app-numeric-input-example',
  templateUrl: './numeric-input-example.component.html',
  styleUrls: ['./numeric-input-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumericInputExampleComponent implements OnInit, OnDestroy {
  private destroySubject = new Subject();
  private digitInfoSubject = new BehaviorSubject(`1.0-0`);

  digitInfo$ = this.digitInfoSubject.asObservable();

  result: number;
  calcForm: FormGroup;
  configForm: FormGroup;

  operators: Operator[] = [
    { id: 'add', text: '+' },
    { id: 'sub', text: '-' },
    { id: 'mlt', text: 'X' },
    { id: 'dvs', text: '/' },
  ];

  decimals: string[] = ['0', '1', '2', '3'];

  @ViewChild('operandOneInput', { static: true })
  operandOneInputRef: ElementRef;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.calcForm = this.fb.group({
      operandOne: [null, Validators.required],
      operator: [this.operators[0], Validators.required],
      operandTwo: [null, Validators.required],
    });

    this.configForm = this.fb.group({
      decimals: [this.decimals[0], Validators.required],
    });

    this.configForm.controls.decimals.valueChanges
      .pipe(takeUntil(this.destroySubject))
      .subscribe((val) => {
        this.digitInfoSubject.next(`1.0-${val}`);
      });
  }

  ngOnDestroy(): void {
    this.destroySubject.next();
  }

  onSubmit(): void {
    if (this.calcForm.invalid) {
      return;
    }

    this.result = this.doSimpleMath(
      parseFloat(this.calcForm.controls.operandOne.value),
      this.calcForm.controls.operator.value,
      parseFloat(this.calcForm.controls.operandTwo.value)
    );
  }

  doSimpleMath(
    operandOne: number,
    operator: Operator,
    operandTwo: number
  ): number {
    switch (operator.id) {
      case 'add':
        return operandOne + operandTwo;
      case 'sub':
        return operandOne - operandTwo;
      case 'mlt':
        return operandOne * operandTwo;
      case 'dvs':
        return operandOne / operandTwo;
      default:
        throw Error(`Unsupported operator: ${operator}`);
    }
  }

  onReset(): void {
    this.calcForm.controls.decimals.setValue(this.decimals[0]);
    this.calcForm.controls.operator.setValue(this.operators[0]);
    this.operandOneInputRef.nativeElement.focus();
  }
}
