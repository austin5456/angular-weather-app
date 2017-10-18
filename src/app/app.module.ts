import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MasterLayoutComponent } from "./master-layout.component";
import { CurrentConditionsComponent } from "./current-conditions.component";
import { HourlyForecastComponent } from "./hourly-forecast.component";
import { WeeklyForecastComponent } from "./weekly-forecast.component";

@NgModule({
  declarations: [
    AppComponent,
    MasterLayoutComponent,
    CurrentConditionsComponent,
    HourlyForecastComponent,
    WeeklyForecastComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
