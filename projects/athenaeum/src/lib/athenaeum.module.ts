import { NgModule } from '@angular/core';
import { AthenaeumComponent } from './athenaeum.component';
import { AthTableComponent } from './components';

@NgModule({
  declarations: [AthenaeumComponent, AthTableComponent],
  imports: [],
  exports: [AthenaeumComponent, AthTableComponent],
})
export class AthenaeumModule {}
