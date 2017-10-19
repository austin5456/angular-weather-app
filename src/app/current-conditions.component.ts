import { Component, OnInit } from "@angular/core";
import { TimeService } from "./weather-data.service";

@Component({
	selector: "current-conditions",
	styleUrls: ["current-conditions.component.css"],
	templateUrl: "current-conditions.component.html",
  providers: [TimeService]
})
export class CurrentConditionsComponent implements OnInit{

	 constructor(private timeService: TimeService){}

	 ngOnInit(){
	 this.timeService.startClock();
	}
}