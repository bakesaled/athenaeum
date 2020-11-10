import { NgModule } from '@angular/core';
import { AthenaeumComponent } from './athenaeum.component';
import { AthTableComponent } from './components';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AthenaeumComponent, AthTableComponent],
  imports: [MatTableModule, CommonModule],
  exports: [AthenaeumComponent, AthTableComponent],
})
export class AthenaeumModule {}
