import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MasterLayoutComponent } from "./master-layout.component";
import { CurrentConditionsComponent } from "./current-conditions.component";

@NgModule({
  declarations: [
    AppComponent,
    MasterLayoutComponent,
    CurrentConditionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
