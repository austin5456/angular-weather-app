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

	constructor(
		private iconSwapper: IconSwapper,
		private mockData: MockHourlyData
		){}

	hObj;

	setData() {
		this.mockData.createData().then((data) => {
			this.hObj = data;
			this.render();
			});
	}
	//icon Urls need filtering to display custom icons
	trimedIconUrls: string[] = [];

	trimedTemps: string[] = [];
	iconArray: string[] = [];

	resetArrays(){
		this.trimedIconUrls.length = 0;
		this.iconArray.length = 0;
		this.trimedTemps.length = 0;
	}

	trimData(){
		//make an array with 3 hour intervals in the data
		for (let i = 0; i < 9; i++){
			this.trimedIconUrls.push(this.hObj.hourly_forecast[i * 3].icon_url);
			this.trimedTemps.push(this.hObj.hourly_forecast[i * 3].temp.english + "°");
		}
	}
	urlToIcon(){
		//populates an array with the background position to display icon from sprite
		this.trimedIconUrls.forEach( 
			(url)=> this.iconArray.push(this.iconSwapper.swapIcon(url))
			);
	}
	render(){
		this.resetArrays();
		this.trimData();
		this.urlToIcon();
	}

	ngOnInit(){
		this.setData();
		//this.render();
		console.log(this.hObj);
		console.log(this.trimedTemps);
		console.log(this.trimedIconUrls);
	}
}