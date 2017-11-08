import { Component, OnInit, Inject } from "@angular/core";
import { DataService } from "./data.service";
import { IconSwapper } from "./icon-swapper.service";
import { Observable }        from 'rxjs/Observable';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Subject }           from 'rxjs/Subject';



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
		private http : Http,
		@Inject(DataService) public dataService
		){}

	fObj;
	private weeklyForecast: forecastUnit[];


	handleData(data){
		this.fObj = data;
		let dataHolder: forecastUnit[] = this.trimData(data);
		this.render(dataHolder);

	}
	render(trimmedData){
		this.weeklyForecast = trimmedData;
	}

	trimData(data){
		let weekdayHolder: forecastUnit[] = [];

		for (let i = 0; i < 7; i++){

			weekdayHolder.push({
				day: data.forecast.simpleforecast.forecastday[i].date.weekday_short,
				date: data.forecast.simpleforecast.forecastday[i].date.day,
				condition: data.forecast.simpleforecast.forecastday[i].conditions,
				icon: this.iconSwapper.swapIcon(data.forecast.simpleforecast.forecastday[i].icon_url),
				highTemp: "High " + data.forecast.simpleforecast.forecastday[i].high.fahrenheit + "°f",
				lowTemp: "Low " + data.forecast.simpleforecast.forecastday[i].low.fahrenheit + "°f"
			});

		}
		return weekdayHolder;
	}
	testDataChange(){
		this.dataService.testDataChange();
	}
	ngOnInit(){
		console.log("weekly started");

		this.dataService.init();
		this.dataService.weeklyData.subscribe(data => {
			console.log("Subject call subscription arrival");
			this.handleData(data);
		});
		}
	}