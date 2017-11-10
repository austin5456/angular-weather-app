import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

interface DataObj {
	data: object;
};

@Injectable()
export class DataService {
	public weeklyData = new Subject;
	public hourlyData = new Subject;
	public conditionsData = new Subject;


	private handleError(error: any): Promise<any>{
		console.error("an error ocurred", error);
		return Promise.reject(error.message || error);
	}
	private started: boolean;
	private zip: string;

	constructor(private http: Http) { }
	hourlyUrl: string = "http://api.wunderground.com/api/238e926ce0161f62/hourly/q/76148.json";
	conditionsUrl: string = "http://api.wunderground.com/api/238e926ce0161f62/conditions/q/76148.json";
	weeklyUrl: string = "http://api.wunderground.com/api/238e926ce0161f62/forecast10day/q/76148.json";

	init() {
		if (!this.started){
			//init all of it here
			this.emitCConditions();
			this.emitWeekly();
			this.emitHourly();
			console.log("started is false");
			this.started = true;
		}
		else {
			console.log("started is true");
		}
	}


	getHourly(): Promise<any> {
		console.log("getHourly ran");
		return this.http.get(this.hourlyUrl)
		.toPromise().then(response => {
			return response.json()})
		.catch(this.handleError);
	}

	getConditions(): Promise<any> {
		console.log("getConditions ran");
		return this.http.get(this.conditionsUrl)
		.toPromise().then(response => {
			return response.json()})
		.catch(this.handleError);
	}

	getWeekly(): Promise<any> {
		console.log("getWeekly ran");
		return this.http.get(this.weeklyUrl)
		.toPromise().then(response => {
			return response.json()})
		.catch(this.handleError);
	}

	emitWeekly(): void {
		this.getWeekly().then( data => this.weeklyData.next(data));
	}

	emitHourly(): void {
		this.getHourly().then( data => this.hourlyData.next(data));
	}
	emitCConditions(): void {
		this.getConditions().then( data => this.conditionsData.next(data));
	}
	
	testDataChange():void {
		this.changeZip("54545");
		this.emitWeekly();
		this.emitHourly();
		this.emitCConditions();
	}
	changeZip(zip:string): void {
		this.zip = zip;
		this.hourlyUrl = "http://api.wunderground.com/api/238e926ce0161f62/hourly/q/" + zip + ".json";
		this.conditionsUrl = "http://api.wunderground.com/api/238e926ce0161f62/conditions/q/" + zip + ".json";
		this.weeklyUrl = "http://api.wunderground.com/api/238e926ce0161f62/forecast10day/q/" + zip + ".json";
	}
	getAllData(): void {
	}
	badInit = console.log("im bad to the bone");

}