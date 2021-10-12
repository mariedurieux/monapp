import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NouveauComponent } from './nouveau/nouveau.component';
import { Exercice1Component } from './exercice1/exercice1.component';
import { Exercice2Component } from './exercice2/exercice2.component';
import { Exercice3Component } from './exercice3/exercice3.component';
import { Exercice4Component } from './exercice4/exercice4.component';

@NgModule({
  declarations: [AppComponent, NouveauComponent, Exercice1Component, Exercice2Component, Exercice3Component, Exercice4Component],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
