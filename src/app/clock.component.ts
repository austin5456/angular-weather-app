import { Component, OnInit, Inject } from "@angular/core";
import { TimeService } from "./time.service";

@Component({
	selector: "clock",
	styleUrls: ["clock.component.css"],
	templateUrl: "clock.component.html",
	providers: [TimeService]
})
export class ClockComponent implements OnInit{

	constructor(@Inject(TimeService) private timeService){}

	ngOnInit(){
		this.timeService.startClock();
	}
}