import { Component, OnInit } from "@angular/core";
import { IconSwapper, OnCreate } from "./icon-swapper.service";
import { MockHourlyData } from "./mockHourlyData";

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
		private mockData: MockHourlyData
		){}

	setData() {
		this.mockData.createData().then((data) => {
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
	urlToIcon(): string[] {
		let iconPositions: string[] = [];//populates an array with the background position to display icon from sprite
		this.trimmedIconUrls.forEach( 
			(url)=> iconPositions.push(this.iconSwapper.swapIcon(url))
			);
		return iconPositions;
	}
	render(){
		this.displayedIconArray = this.urlToIcon();
		this.displayedTempArray = this.trimmedTemps;
	}

	ngOnInit(){
		this.setData();
		//this.render();
		console.log(this.hObj);
		console.log(this.trimmedTemps);
		console.log(this.trimmedIconUrls);
	}
}