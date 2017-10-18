import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MasterLayoutComponent } from "./master-layout.component";
import { CurrentConditionsComponent } from "./current-conditions.component";
import { HourlyForecastComponent } from "./hourly-forecast.component";

@NgModule({
  declarations: [
    AppComponent,
    MasterLayoutComponent,
    CurrentConditionsComponent,
    HourlyForecastComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
