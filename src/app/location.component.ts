import { Component, Inject, OnInit } from "@angular/core";
import { DataService } from "./data.service";



interface Location {
	city: string,
	state: string
}
@Component({
	selector: "location",
	styleUrls: ["./location.component.css"],
	templateUrl: "./location.component.html"
})
export class LocationComponent implements OnInit{
	private location: Location;

	constructor(
		@Inject(DataService) public dataService
		){}

	render(trimmedData: Location): void {
		this.location = trimmedData;
	}
	handleData(data): void {
		let locationHolder = this.trimData(data);
		this.render(locationHolder);
	}

	trimData(data): Location {

		let location: Location = {
			city: data.current_observation.display_location.city,
			state: data.current_observation.display_location.state_name
		}
		return location;
	}

	 checkZip(zip) {
	 	if (zip.length === 5 && !isNaN(zip)){
	 		this.dataService.getAllData(zip);
	 	}
	 	else {
	 		alert("Please enter a valid Zip code");
	 	}
        // if (e.charCode === 13 || e.type === "click") {
        //     // if (this.zipInput.value.length === 5 && !isNaN(this.zipInput.value)) {
        //     //     this.extractValue();
        //     // }
        // }
        console.log(zip);
    }

	ngOnInit(): void {
		this.dataService.conditionsData.subscribe(data => {
			this.handleData(data);
		})

	}
}