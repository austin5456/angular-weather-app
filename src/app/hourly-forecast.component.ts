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

	hObj = this.mockData.createData();;
	//hourlyForecast = this.mockData.createData();

	mockTemps: string[] = [];
	mockIcons: string[] = [];
	craftedArray: string[] = [];

	iconArrayMaker(url){
		this.craftedArray.push(this.iconSwapper.swapIcon(url));
		console.log(this.iconSwapper.swapIcon(url));
	}
	trimData(){
		//make an array with 3 hour intervals in the data
		for (let i = 0; i < 9; i++){

			 this.mockIcons.push(this.hObj.hourly_forecast[i * 3].icon_url);
			 this.mockTemps.push(this.hObj.hourly_forecast[i * 3].temp.english + "°");
		}
	}


	ngOnInit(){
		console.log(this.hObj);
		this.trimData();
		console.log(this.mockTemps);
		console.log(this.mockIcons);
		this.mockIcons.forEach( (potato)=> {
			//console.log(potato);
			return this.iconArrayMaker(potato)});
	}
}