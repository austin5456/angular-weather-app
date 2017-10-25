import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

interface DataObj {
	data: object;
};

@Injectable()
export class DataService {

	constructor(private http: Http) { }
	hourlyUrl: string = "http://api.wunderground.com/api/238e926ce0161f62/hourly/q/76148.json";
	conditionsUrl: string = "http://api.wunderground.com/api/238e926ce0161f62/conditions/q/76148.json";
	weeklyUrl: string = "http://api.wunderground.com/api/238e926ce0161f62/forecast10day/q/76148.json";

	getHourly(): Promise<DataObj> {
		console.log("getHourly ran");
		return this.http.get(this.hourlyUrl)
		.toPromise().then(response => {
			//console.log(response);
			return response.json() as DataObj})
		.catch(this.handleError);
	}

	getConditions(): Promise<DataObj> {
		console.log("getConditions ran");
		return this.http.get(this.conditionsUrl)
		.toPromise().then(response => {
			//console.log(response);
			return response.json() as DataObj})
		.catch(this.handleError);
	}

	getWeekly(): Promise<DataObj> {
		console.log("getWeekly ran");
		return this.http.get(this.weeklyUrl)
		.toPromise().then(response => {
			//console.log(response);
			return response.json() as DataObj})
		.catch(this.handleError);
	}


	private handleError(error: any): Promise<any>{
		console.error("an error ocurred", error);
		return Promise.reject(error.message || error);
	}
	testDataChange() {
		this.changeZip("54545");
		this.getAllData();
	}
	changeZip(zip:string) {
		this.hourlyUrl = "http://api.wunderground.com/api/238e926ce0161f62/hourly/q/" + zip + ".json";
		this.conditionsUrl = "http://api.wunderground.com/api/238e926ce0161f62/conditions/q/" + zip + ".json";
		this.weeklyUrl = "http://api.wunderground.com/api/238e926ce0161f62/forecast10day/q/" + zip + ".json";
	}
	getAllData() {
		this.hourlyData = this.getHourly();
		this.conditionsData = this.getConditions();
		this.weeklyData = this.getWeekly();

	}
	hourlyData = this.getHourly();
	conditionsData = this.getConditions();
	weeklyData = this.getWeekly();
}