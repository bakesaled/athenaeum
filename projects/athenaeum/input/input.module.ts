import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AthInputDirective } from './input.directive';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AthInputDirective],
  imports: [CommonModule, MatInputModule],
  exports: [AthInputDirective],
})
export class AthInputModule {}
