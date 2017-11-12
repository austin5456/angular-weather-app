import { Component, OnInit, Inject } from "@angular/core";
import { IconSwapper } from "./icon-swapper.service";
import { DataService } from "./data.service";
import { HourlySequencer } from "./hourly-sequencer.service";


interface hourlyUnit {
	icon: string,
	iconPos: string,
	temperature: string
}
@Component({
	selector: "hourly-forecast",
	styleUrls: ["./hourly-forecast.component.css"],
	templateUrl: "./hourly-forecast.component.html",
	providers: [IconSwapper, HourlySequencer]
})
export class HourlyForecastComponent implements OnInit {
	hObj;
	displayedData: hourlyUnit[];
	public positionArray;
	constructor(
		private iconSwapper: IconSwapper,
		private hourlySequencer: HourlySequencer,
		@Inject(DataService) public dataService
		){}

	handleData(data) {
		this.hObj = data;
		let dataHolder:hourlyUnit[] = this.trimData(data);
		this.render(dataHolder);
	}

	trimData(data): hourlyUnit[] {
		this.positionArray = this.hourlySequencer.sequence(data);
		let returnedData: hourlyUnit[] = [];

		for (let i = 0; i < 9; i++){

			returnedData.push({
				icon: this.iconSwapper.swapIcon(data.hourly_forecast[i * 3].icon_url),
				iconPos: this.positionArray[i],
				temperature: data.hourly_forecast[i * 3].temp.english + "°"
			});
		}

		return returnedData;
	}
	render(data:hourlyUnit[]){
		this.displayedData = data;

	}

	ngOnInit(){
		this.dataService.hourlyData.subscribe(data => this.handleData(data));
		console.log("hourly started")
		this.dataService.init();
	}
}