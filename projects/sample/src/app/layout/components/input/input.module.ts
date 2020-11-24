import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputRoutingModule } from './input-routing.module';
import { InputComponent } from './input.component';
import { NumericInputExampleComponent } from './examples/numeric-input-example/numeric-input-example.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [InputComponent, NumericInputExampleComponent],
  imports: [CommonModule, InputRoutingModule, SharedModule],
})
export class InputModule {}
