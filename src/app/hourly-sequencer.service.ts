import { ParableMaker } from "./parable-maker.service";
import { Injectable } from "@angular/core";

@Injectable()
export class HourlySequencer {
	private iterationCount: number = 9;
	private sequenceString: string = "";
	private sequenceValues: string[] = [];

	//old
	public arrayLocation: number;
	public trimmedArray: string[];
	public positionArray: string[];

	constructor(private parableMaker: ParableMaker){}
	
	

	sequencer(data): string[]{
		let subStr = "nt";
		this.sequenceValues = [];
		this.sequenceString = "";

		for (let i = 0; i < this.iterationCount; i++){
			if (data.hourly_forecast[(i * 3)].icon_url.toString().indexOf(subStr) === -1) {
				this.sequenceString += "D";
			}
			else {
				this.sequenceString += "N";
			}
			this.extractValues(i);
		}
		let valuesArray: number[] = [];

		this.sequenceValues.forEach((value) => valuesArray = valuesArray.concat(
			this.parableMaker.init(value, this.sequenceValues)
			));
		let positionArray = valuesArray.map((value)=> value.toString() + "px");
		return positionArray;
	}

	extractValues(i:number): void{
		if (this.sequenceString.charAt(i) !== this.sequenceString.charAt(i-1) && i !== 0){
			this.sequenceValues.push(this.sequenceString.charAt(i-1) + (i-1).toString());
		}
		if (i === this.iterationCount -1){
			this.sequenceValues.push(this.sequenceString.charAt(i) + (i).toString());
		}

	}


	oldSequencer(data): string[] {

		this.sequenceValues.length = 0;
		this.sequenceString = "";

		this.positionArray = ["30px", "45px", "45px", "30px", "15px", "0", "0", "15px", "30px", "45px", "45px", "30px", "15px", "0", "0", "15px", "30px"];
		let subStr = "nt";
		let positionString = "";

		for (var i = 0; i < 4; i++) {
			// if in day hours
			if (data.hourly_forecast[(i * 3)].icon_url.toString().indexOf(subStr) === -1) {
				positionString += "D";
			}
			else {
				positionString += "N";
			}
		}
		this.arrayLocation = {
			NNNN: 0,
			NNND: 1,
			NNDD: 2,
			NDDD: 3,
			DDDD: 4,
			DDDN: 5,
			DDNN: 6,
			DNNN: 7
		}[positionString];

		console.log(this.sequenceString);
		console.log(this.sequenceValues);

		return this.snipArray();
	}
	snipArray (): string[] {
		let snippedArray = [];
		for (var i = 0 + this.arrayLocation; i < 9 + this.arrayLocation; i++) {
			snippedArray.push(this.positionArray[i]);
		}
		this.trimmedArray = snippedArray;
		return snippedArray;
	}

}