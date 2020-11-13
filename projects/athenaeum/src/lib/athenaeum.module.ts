import { NgModule } from '@angular/core';
import { AthenaeumComponent } from './athenaeum.component';
import { CommonModule } from '@angular/common';
import { AthTableModule } from './components/table/table.module';

@NgModule({
  declarations: [AthenaeumComponent],
  imports: [CommonModule, AthTableModule],
  exports: [AthenaeumComponent],
})
export class AthenaeumModule {}
