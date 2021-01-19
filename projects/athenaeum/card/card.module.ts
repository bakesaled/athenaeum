import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AthCardComponent } from '@bakesaled/athenaeum/card/card.component';

@NgModule({
  declarations: [AthCardComponent],
  imports: [CommonModule],
  exports: [AthCardComponent],
})
export class AthCardModule {}
