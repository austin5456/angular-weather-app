import { Component } from '@angular/core';

import { MasterLayoutComponent } from "./master-layout.component";
import { CurrentConditionsComponent } from "./current-conditions.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Weather App';
}
