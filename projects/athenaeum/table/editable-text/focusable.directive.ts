import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[athFocusable]',
})
export class FocusableDirective implements AfterViewInit {
  constructor(private hostEl: ElementRef) {}

  ngAfterViewInit(): void {
    this.hostEl.nativeElement.focus();
    this.hostEl.nativeElement.select();
  }
}
