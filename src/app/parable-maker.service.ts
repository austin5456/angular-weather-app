import { Injectable } from "@angular/core";

@Injectable()
export class ParableMaker {
	private flatParable: boolean = true;


	public output: number[];

	private itemCount: number;
	private numbStep: number;
	private baseline: number;
	private steps: number;
	private firstStep: boolean;

	private baseSteps: number;


	private even: boolean;



	// for each notch in key, run function
	init(keyNotch, key): number[]{
		this.setVars(keyNotch, key);
		this.posExceptions(keyNotch, key);
		this.flattenedParable();
		return this.output;
	}

	setVars(keyNotch, key): void{

		this.output = [];
		this.firstStep = true;

		if (key.indexOf(keyNotch) !== 0){
			this.itemCount = +keyNotch.charAt(1) - +key[key.indexOf(keyNotch) -1].charAt(1);
		}
		else {
			this.itemCount = +keyNotch.charAt(1) +1;
		}
		if (keyNotch.charAt(0) === "N") {
			this.numbStep = 15;
			this.baseline = 15; 
		} else {
			this.numbStep = -15;
			this.baseline = 0; 
		}


		if (this.flattenedParable){
			this.steps = 1;
			this.baseSteps = this.itemCount -2;	
		}
		else {
			this.even = (this.itemCount % 2 === 0) ? true : false;
			this.steps = (this.even) ? (this.itemCount / 2 -1) : (this.itemCount - 1) / 2;
		}

		
	}

	parable(): void{
		let even: boolean = this.even;
		let steps: number = this.steps;	
		let firstStep: boolean = this.firstStep;

		for ( let i = 0; i < this.itemCount; i++){

			if (firstStep){

				this.output.push(this.baseline);
				firstStep = false;
			}
			else {

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
		}
	}
	flattenedParable(){

		let steps: number = this.steps;
		let baseSteps: number = this.baseSteps;
		let firstStep: boolean = this.firstStep;

		for ( let i = 0; i < this.itemCount; i++){

			console.log(i);
			if (firstStep){
				this.output.push(this.baseline);
				firstStep = false;
				baseSteps -= 1;
			}
			else {
				if (steps !== 0){
					this.output.push(this.baseline += this.numbStep);
					this.numbStep *= -1;
					steps -= 1;
				}
				if (baseSteps !== 0) {
					this.output.push(this.baseline);
					baseSteps -= 1;
				}
				else {
					steps = 1;
				}
			}
			// if ((i === 1 || i === this.itemCount -1) && (this.itemCount !== 1)){
			// 	this.output.push(this.baseline += this.numbStep);
			// 	this.numbStep *= -1;
			// }
			// else {
			// 	this.output.push(this.baseline);
			// }
		}
	}

	posExceptions(keyNotch, key): void{

		let start: boolean;
		let end: boolean;
		let nextItemCount: number;
		let prevItemCount: number;
		let itemCount = this.itemCount;

		if (key.indexOf(keyNotch) === 0){
			start = true;
			nextItemCount = +key[key.indexOf(keyNotch) +1].charAt(1) - +keyNotch.charAt(1);
		}
		if (key.indexOf(keyNotch) === key.length -1){
			end = true;
			prevItemCount = +key[key.indexOf(keyNotch) -1].charAt(1) - +key[key.indexOf(keyNotch) -2].charAt(1);
		}

		if (this.flattenedParable){
			console.log("ran flat par exceptions")

			if (itemCount === 3 && end && prevItemCount < 5){
				this.baseSteps += 1;
			}
			if (itemCount === 3 && start && nextItemCount < 5){
				console.log("true for 3 start les 5");
				this.firstStep = false;
			}
			if (this.itemCount === 2 && start) {
				this.firstStep = false;
			} 
			else if (this.itemCount === 2 && !end){
				this.steps = 0;
				this.baseSteps = 1;
			}
		}
		else {

			if (end && this.itemCount === 2 ){
				console.log("end");
				this.steps = 1;
			}
			if (start && this.itemCount === 2){
				console.log("ran");
				this.steps = 1;
				this.firstStep = false;
				this.even = false;		
			}

			if ((start && this.itemCount === 3) && (nextItemCount === 4 || nextItemCount === 3)) {
				this.firstStep = false;
				this.even = true;
			}
			if ((end && this.itemCount === 3) && (prevItemCount === 3 || prevItemCount === 4)) {
				this.even = true;
			}
		}
	}

}