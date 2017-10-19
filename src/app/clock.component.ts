import { Component, OnInit } from "@angular/core";
import { TimeService } from "./time.service";

@Component({
	selector: "clock",
	styleUrls: ["clock.component.css"],
	templateUrl: "clock.component.html",
	providers: [TimeService]
})
export class ClockComponent implements OnInit{

	constructor(private timeService: TimeService){}

	ngOnInit(){
		this.timeService.startClock();
	}
}