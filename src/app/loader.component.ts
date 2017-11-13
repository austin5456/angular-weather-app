import { Component, OnInit, Inject } from "@angular/core";
import { DataService } from "./data.service";

@Component({
	selector: "loader",
	styleUrls: ["./loader.component.css"],
	templateUrl: "./loader.component.html"
})
export class LoaderComponent implements OnInit{

	constructor(@Inject(DataService) public dataService){}

	private changeClass: boolean;
	private removeDisplay: boolean;
	private itemsToLoad: number = 3;
	private itemsLoaded: number = 0;



	loadCheck(){
		this.itemsLoaded +=1;
		if (this.itemsToLoad === this.itemsLoaded) {
			this.doneLoading();
		}
	}

	doneLoading() {
		let myScope = this;
		setTimeout(function () {
			myScope.changeClass = true;
			setTimeout(function () {
				myScope.removeDisplay = true;
			}, 1500);
		}, 150);

		console.log("done Loading");
	}

	ngOnInit(){
		this.dataService.hourlyData.subscribe(data => this.loadCheck());
		this.dataService.weeklyData.subscribe(data => this.loadCheck());
		this.dataService.conditionsData.subscribe(data => this.loadCheck());
	}

}