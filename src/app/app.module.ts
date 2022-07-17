import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Home } from './home/home.component';
import { Escena } from './escena/escena.component';

@NgModule({
  declarations: [
    AppComponent,
    Home,
    Escena
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
