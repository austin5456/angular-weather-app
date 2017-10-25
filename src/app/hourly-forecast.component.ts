import { Component, OnInit } from "@angular/core";
import { IconSwapper } from "./icon-swapper.service";
import { MockHourlyData } from "./mockHourlyData";
import { DataService } from "./data.service";

@Component({
	selector: "hourly-forecast",
	styleUrls: ["./hourly-forecast.component.css"],
	templateUrl: "./hourly-forecast.component.html",
	providers: [IconSwapper, MockHourlyData]
})
export class HourlyForecastComponent implements OnInit {
	hObj;
	constructor(
		private iconSwapper: IconSwapper,
		private mockData: MockHourlyData,
		private dataService: DataService
		){}

	setData() {
		this.mockData.createData().then((data) => {
			this.hObj = data;
			//this.dataService.getHourlyData().then((data) => console.log(data));
			this.trimData();
			this.render();
			});
	}
	setRealData(){
		this.dataService.hourlyData().then((data) => {
			this.hObj = data;
			this.trimData();
			this.render();
		});
	}
	trimmedIconUrls: string[] = [];
	trimmedTemps: string[] = [];

	displayedIconArray: string[] = [];
	displayedTempArray: string[] = [];

	trimData(){
		//make arrays with 3 hour intervals in the data
		let iconUrlArray = [];
		let tempArray = [];

		for (let i = 0; i < 9; i++){
			iconUrlArray.push(this.hObj.hourly_forecast[i * 3].icon_url);
			tempArray.push(this.hObj.hourly_forecast[i * 3].temp.english + "°");
		}
		this.trimmedIconUrls = iconUrlArray;
		this.trimmedTemps = tempArray;
	}
	render(){
		this.displayedIconArray = this.iconSwapper.urlToIconArr(this.trimmedIconUrls);
		this.displayedTempArray = this.trimmedTemps;
	}

	ngOnInit(){
		this.setRealData();
		//this.render();
		console.log(this.hObj);
		console.log(this.trimmedTemps);
		console.log(this.trimmedIconUrls);
	}
}