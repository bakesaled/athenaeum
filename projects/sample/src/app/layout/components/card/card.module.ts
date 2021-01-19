import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { SharedModule } from '../../../shared/shared.module';
import { CardRoutingModule } from './card-routing.module';
import { BasicCardExampleComponent } from './examples/basic-card-example/basic-card-example.component';
import { ListCardExampleComponent } from './examples/list-card-example/list-card-example.component';

@NgModule({
  declarations: [
    CardComponent,
    BasicCardExampleComponent,
    ListCardExampleComponent,
  ],
  imports: [CommonModule, SharedModule, CardRoutingModule],
})
export class CardModule {}
