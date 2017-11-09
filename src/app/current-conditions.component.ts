import { Component, OnInit, Inject } from "@angular/core";
import { DataService } from "./data.service";
import { IconSwapper } from "./icon-swapper.service";


interface ConditionsUnit {
	icon: string,
	month: string,
	conditions: string,
	temp: string
}
@Component({
	selector: "current-conditions",
	styleUrls: ["current-conditions.component.css"],
	templateUrl: "current-conditions.component.html",
	providers: [IconSwapper]
})
export class CurrentConditionsComponent implements OnInit {

	constructor(
		@Inject(DataService) public dataService,
		private iconSwapper: IconSwapper
		){}
	private hObj;
	private CCUnit: ConditionsUnit;
//hourly forecast is more accurate.
handleData(data): void {
	let CCHolder = this.trimData(data);
	this.render(CCHolder);
}
	trimData(data): ConditionsUnit {

		let CCUnit: ConditionsUnit = {

        icon: this.iconSwapper.swapIcon(data.hourly_forecast["0"].icon_url),
        month: data.hourly_forecast["0"].FCTTIME.month_name,
        conditions: data.hourly_forecast["0"].condition,
        temp: data.hourly_forecast["0"].temp.english

      };
      return CCUnit;
    }

    render(trimmedData: ConditionsUnit): void {
    	this.CCUnit = trimmedData;
    }

    ngOnInit(): void {
    	this.dataService.hourlyData.subscribe(data => this.handleData(data));
    }
}