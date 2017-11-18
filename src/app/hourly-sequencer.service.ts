

export class HourlySequencer {
	public positionArray;
	public arrayLocation;
	public trimmedArray;
	private iterationCount: number = 9;
	private sequenceString: string = "";
	private sequenceValues: string[] = [];
	
	sequence (data): string[] {

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


		this.newSequencer(data);
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

	newSequencer(data){
		let subStr = "nt";

		for (let i = 0; i < this.iterationCount; i++){
			if (data.hourly_forecast[(i * 3)].icon_url.toString().indexOf(subStr) === -1) {
				this.sequenceString += "D";
			}
			else {
				this.sequenceString += "N";
			}
			this.logSequence(i, this.sequenceValues);
		}
		let positionsArray: number[] = [];

		this.sequenceValues.forEach((value) => positionsArray = positionsArray.concat(
			this.analize(value, this.sequenceValues)
			));
		console.log(positionsArray);
		return positionsArray;
	}

	logSequence(i:number, output: string[]){
		if (this.sequenceString.charAt(i) !== this.sequenceString.charAt(i-1) && i !== 0){
			output.push(this.sequenceString.charAt(i-1) + (i-1).toString());
		}
		if (i === this.iterationCount -1){
			output.push(this.sequenceString.charAt(i) + (i).toString());
		}

	}

	evenOrOdd(n){
		if (!isNaN(n)){
			console.log(n);
			if (n & 1){
				//odd
				return 1;
			}
			else {
				//even
				return 0;
			}
		}
		else {
			console.log("NaN");
		}
	}

	analize(POS, key){
		let itemCount: number;
		if (key.indexOf(POS) !== 0){
			itemCount = +POS.charAt(1) - +key[key.indexOf(POS) -1].charAt(1);
		}
		else {
			itemCount = +POS.charAt(1) +1;
		}
		console.log(itemCount);
		let steps: number;
		let numbStep: number;
		let baseline: number;
		let output: number[] = [];

		if (POS.charAt(0) === "D") {
			numbStep = 4;
			baseline = 12; 
		} else {
			numbStep = -4;
			baseline = 8; 
		}


		if (this.evenOrOdd(itemCount) === 1) {
			
		let oneRun: boolean;
			for ( let i = 0; i < itemCount; i++){
				if (oneRun){
					if (steps === 0){
						numbStep *= -1;
						steps = ((itemCount - 1) / 2);
						output.push(baseline += numbStep);
						steps -= 1;
					} 
					else {
						output.push(baseline += numbStep);
						steps -= 1;
					}
				}
				else {
					steps = ((itemCount - 1) / 2);
					output.push(baseline);
					oneRun = true;
				}
			}
		} else {
			steps = 1;
			for ( let i = 0; i < itemCount; i++){
				if (steps === 0){
					output.push(baseline += numbStep);
					steps = 1;
					numbStep *= -1;
				}
				else {
					output.push(baseline);
					steps -= 1; 
				}
			}
		}
		return output;
	}

}