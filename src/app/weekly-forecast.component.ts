import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";
import { IconSwapper } from "./icon-swapper.service";


interface forecastUnit {
	day: string,
	date: string,
	condition: string,
	icon:string,
	highTemp: string,
	lowTemp: string
}

@Component({
	selector: "weekly-forecast",
	styleUrls: ["./weekly-forecast.component.css"],
	templateUrl: "./weekly-forecast.component.html",
	providers: [IconSwapper]
})
export class WeeklyForecastComponent implements OnInit {
	constructor(
		private dataService : DataService,
		private iconSwapper : IconSwapper
		){}

	fObj;
	weeklyForecast: forecastUnit[];

	getData(){
		this.dataService.weeklyForecast().then(
			(data) => {
				//console.log(data);
				this.fObj = data;
				let dataHolder: forecastUnit[] = this.trimData();
				this.render(dataHolder);
			}
			);
	}
	render(data){
		this.weeklyForecast = data;
	}

	trimData(){

		let weekdayHolder : forecastUnit[] = [];

		for (let i = 0; i < 7; i++){

			weekdayHolder.push({
				day: this.fObj.forecast.simpleforecast.forecastday[i].date.weekday_short,
				date: this.fObj.forecast.simpleforecast.forecastday[i].date.day,
				condition: this.fObj.forecast.simpleforecast.forecastday[i].conditions,
				icon: this.iconSwapper.swapIcon(this.fObj.forecast.simpleforecast.forecastday[i].icon_url),
				highTemp: "High " + this.fObj.forecast.simpleforecast.forecastday[i].high.fahrenheit + "°f",
				lowTemp: "Low " + this.fObj.forecast.simpleforecast.forecastday[i].low.fahrenheit + "°f"
			});

		}
		return weekdayHolder;
	}
	ngOnInit(){
		this.getData();
	}
}