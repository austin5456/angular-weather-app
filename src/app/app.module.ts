import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { DataService } from "./data.service";

import { AppComponent } from './app.component';
import { MasterLayoutComponent } from "./master-layout.component";
import { CurrentConditionsComponent } from "./current-conditions.component";
import { HourlyForecastComponent } from "./hourly-forecast.component";
import { WeeklyForecastComponent } from "./weekly-forecast.component";
import { LoaderComponent } from "./loader.component";
import { LocationComponent } from "./location.component";
import { ClockComponent } from "./clock.component";

@NgModule({
  declarations: [
    AppComponent,
    MasterLayoutComponent,
    CurrentConditionsComponent,
    HourlyForecastComponent,
    WeeklyForecastComponent,
    LoaderComponent,
    LocationComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
