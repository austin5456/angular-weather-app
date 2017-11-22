import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from "./data.service";

@Component({
	selector: "master-layout",
	styleUrls: ["./master-layout.component.css"],
	templateUrl: "./master-layout.component.html"
})
export class MasterLayoutComponent implements OnInit{

	constructor(@Inject(DataService) public dataService){}


	private title:string = "Master Layout Linked";
	private isNight: boolean;

	setDayVsNight(data) {
		let dayOrNight;
		let subStr = "nt";
		if (data.hourly_forecast[0].icon_url.toString().indexOf(subStr) === -1) {
			dayOrNight = "D";
		}
		else {
			dayOrNight = "N"
		}
		if (dayOrNight === "N") {
			this.isNight = true;
		}
	}

	ngOnInit(){
		this.dataService.hourlyData.subscribe(data => {
			this.setDayVsNight(data);
		});
	}
}