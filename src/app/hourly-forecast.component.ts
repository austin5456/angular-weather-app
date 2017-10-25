import { Component, OnInit } from "@angular/core";
import { IconSwapper } from "./icon-swapper.service";
import { DataService } from "./data.service";


interface hourlyUnit {
	icon: string,
	temperature: string
}
@Component({
	selector: "hourly-forecast",
	styleUrls: ["./hourly-forecast.component.css"],
	templateUrl: "./hourly-forecast.component.html",
	providers: [IconSwapper]
})
export class HourlyForecastComponent implements OnInit {
	hObj;
	displayedData: hourlyUnit[];
	constructor(
		private iconSwapper: IconSwapper,
		private dataService: DataService
		){}

	getData(){
		this.dataService.hourlyData().then((data) => {
			this.hObj = data;
			let dataHolder:hourlyUnit[] = this.trimData();
			this.render(dataHolder);
		});
	}

	trimData(): hourlyUnit[] {
		let returnedData: hourlyUnit[] = [];

		for (let i = 0; i < 9; i++){

			returnedData.push({
				icon: this.iconSwapper.swapIcon(this.hObj.hourly_forecast[i * 3].icon_url),
				temperature: this.hObj.hourly_forecast[i * 3].temp.english + "°"
			});
		}

		return returnedData;
	}
	render(data:hourlyUnit[]){
		this.displayedData = data;

	}

	ngOnInit(){
		this.getData();
	}
}