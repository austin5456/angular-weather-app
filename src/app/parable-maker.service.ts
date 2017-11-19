import { Injectable } from "@angular/core";

@Injectable()
export class ParableMaker {
	public output: number[];

	private itemCount: number;
	private numbStep: number;
	private baseline: number;
	private steps: number;

	private even: boolean;
	private oneRun: boolean;



	// for each notch in key, run function
	init(keyNotch, key): number[]{
		this.setVars(keyNotch, key);
		this.posExceptions(keyNotch, key);
		this.setPositions();
		return this.output;
	}

	setVars(keyNotch, key): void{
		this.output = [];
		this.oneRun = false;

		if (key.indexOf(keyNotch) !== 0){
			this.itemCount = +keyNotch.charAt(1) - +key[key.indexOf(keyNotch) -1].charAt(1);
		}
		else {
			this.itemCount = +keyNotch.charAt(1) +1;
		}

		this.even = (this.itemCount % 2 === 0) ? true : false;
		this.steps = (this.even) ? (this.itemCount / 2 -1) : (this.itemCount - 1) / 2;
		
		if (keyNotch.charAt(0) === "N") {
			this.numbStep = 15;
			this.baseline = 15; 
		} else {
			this.numbStep = -15;
			this.baseline = 0; 
		}
	}

	setPositions(): void{
		let even: boolean = this.even;
		let steps: number = this.steps;
		
		let oneRun: boolean = this.oneRun;

		for ( let i = 0; i < this.itemCount; i++){

			if (oneRun){

				if (steps === 0){
					this.numbStep *= -1;
					steps = this.steps;
					if (even){
						this.output.push(this.baseline);
					}
					else {
						this.output.push(this.baseline += this.numbStep);
						steps -= 1;
					}
				} 
				else {
					this.output.push(this.baseline += this.numbStep);
					steps -= 1;
				}

			}
			else {
				this.output.push(this.baseline);
				oneRun = true;
			}
		}
	}

	posExceptions(keyNotch, key): void{
		let start: boolean;
		let end: boolean;
		let nextItemCount: number;
		let prevItemCount: number;

		if (key.indexOf(keyNotch) === 0){
			start = true;
			nextItemCount = +key[key.indexOf(keyNotch) +1].charAt(1) - +keyNotch.charAt(1);
		}
		if (key.indexOf(keyNotch) === key.length -1){
			end = true;
			prevItemCount = +key[key.indexOf(keyNotch) -1].charAt(1) - +key[key.indexOf(keyNotch) -2].charAt(1);
		}


		if (end && this.itemCount === 2 ){
			this.steps = 1;
		}
		if (start && this.itemCount === 2){
			console.log("ran");
			this.steps = 1;
			this.oneRun = true;
			this.even = false;		
		}

		if (start && this.itemCount === 3 && nextItemCount === 4 || nextItemCount === 3) {
            this.oneRun = true;
            this.even = true;
		}
		if (end && this.itemCount === 3 && prevItemCount === 4 || prevItemCount === 3) {
			this.even = true;
		}
	}
	
}