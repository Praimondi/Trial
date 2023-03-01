import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './modules/home/home.module';
import { PazientiModule } from './modules/pazienti/pazienti.module';
import { DefinitionsModule } from './modules/definitions/definitions.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    PazientiModule,
    DefinitionsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }