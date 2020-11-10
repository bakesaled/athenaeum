import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AthenaeumModule } from '../../../athenaeum/src/lib/athenaeum.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AthenaeumModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
