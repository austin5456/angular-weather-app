

export class HourlySequencer {
	public positionArray;
	public arrayLocation;
	public trimmedArray;
	private iterationCount: number = 9;
	private sequenceString: string = "";
	private sequenceValues: string[] = [];
	
	sequence (data): string[] {
		this.positionArray = ["30px", "45px", "45px", "30px", "15px", "0", "0", "15px", "30px", "45px", "45px", "30px", "15px", "0", "0", "15px", "30px"];
		let subStr = "nt";
		let positionString = "";
		let dayNightSequence = "";
		for (var i = 0; i < 4; i++) {
			// if in day hours
			if (data.hourly_forecast[(i * 3)].icon_url.toString().indexOf(subStr) === -1) {
				positionString += "D";
			}
			else {
				positionString += "N";
			}
		}
		for (var i = 0; i < this.iterationCount; i++){
			if (data.hourly_forecast[(i * 3)].icon_url.toString().indexOf(subStr) === -1) {
				this.sequenceString += "D";
			}
			else {
				this.sequenceString += "N";
			}
			this.logSequence(i, this.sequenceValues);
		}
		this.setPositionValues();
		let lowPoint = "45px";
		let highPoint = "0px"

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

	evenOrOdd(n){
		if (!isNaN(n)){
			if (n & 1){
				console.log("odd");
			}
			else {console.log("even")}
				console.log(n);
		}
		else {
			console.log("NaN");
		}
	}

	setPositionValues(){
		let numStep: number = 4;
		let basePos: number = 20;

		for (var i = 0; i < this.iterationCount; i++) {

		}
	}

	logSequence(i:number, output: string[]){
		if (this.sequenceString.charAt(i) !== this.sequenceString.charAt(i-1) && i !== 0){
			output.push(this.sequenceString.charAt(i-1) + (i-1).toString());
		}
		if (i === this.iterationCount -1){
			output.push(this.sequenceString.charAt(i) + (i).toString());
		}

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