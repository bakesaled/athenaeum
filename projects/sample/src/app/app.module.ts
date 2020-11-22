import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { HttpClientModule } from '@angular/common/http';
import { persistState } from '@datorama/akita';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    environment.production
      ? []
      : AkitaNgDevtools.forRoot({
          maxAge: 25,
          logTrace: false,
        }),
  ],
  providers: [{ provide: 'persistStorage', useValue: persistState() }],
  bootstrap: [AppComponent],
})
export class AppModule {}
