import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable operators
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
	constructor(private http: Http) { }

	public zip: string = "76148";

	public weeklyData = new Subject;
	public hourlyData = new Subject;
	public conditionsData = new Subject;

	public hourlyUrl: string = "http://api.wunderground.com/api/238e926ce0161f62/hourly/q/" + this.zip + ".json";
	public conditionsUrl: string = "http://api.wunderground.com/api/238e926ce0161f62/conditions/q/" + this.zip + ".json";
	public weeklyUrl: string = "http://api.wunderground.com/api/238e926ce0161f62/forecast10day/q/" + this.zip + ".json";


	private handleError(error: any): Promise<any>{
		console.error("an error ocurred", error);
		return Promise.reject(error.message || error);
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
		this.getWeekly().then( data => {
			if (data.response.error){
				console.log(data.response.error.description);
			}
			else {this.weeklyData.next(data)}
		});
	}

	emitHourly(): void {
		this.getHourly().then( data => {
			if (data.response.error){
				console.log(data.response.error.description);
			}
			else {this.hourlyData.next(data)}
		});
	}
	emitCConditions(): void {
		this.getConditions().then( data => {
			if (data.response.error){
				console.log(data.response.error.description);
			}
			else {
			this.conditionsData.next(data)
		}
		});
	}

	getAllData(newZip?: string){
		if (newZip) {
		this.changeZip(newZip);
	}
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
	private badInit = this.getAllData();

}