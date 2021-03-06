import { Component, OnInit, Inject } from "@angular/core";
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
		private iconSwapper : IconSwapper,
		@Inject(DataService) public dataService
		){}

	fObj;
	private weeklyForecast: forecastUnit[];


	handleData(data): void{
		this.fObj = data;
		let dataHolder: forecastUnit[] = this.trimData(data);
		this.render(dataHolder);

	}
	render(trimmedData): void{
		this.weeklyForecast = trimmedData;
	}

	trimData(data): forecastUnit[] {
		let weekdayHolder: forecastUnit[] = [];

		for (let i = 0; i < 7; i++){

			weekdayHolder.push({
				day: data.forecast.simpleforecast.forecastday[i].date.weekday_short,
				date: data.forecast.simpleforecast.forecastday[i].date.day,
				condition: data.forecast.simpleforecast.forecastday[i].conditions,
				icon: this.iconSwapper.swapIcon(data.forecast.simpleforecast.forecastday[i].icon_url),
				highTemp: data.forecast.simpleforecast.forecastday[i].high.fahrenheit,
				lowTemp: data.forecast.simpleforecast.forecastday[i].low.fahrenheit
			});

		}
		return weekdayHolder;
	}
	ngOnInit(): void{
		this.dataService.weeklyData.subscribe(data => {
			this.handleData(data);
		});
		}
	}