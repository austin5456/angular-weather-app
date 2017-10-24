import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

interface DataObj {
	data: object;
};

@Injectable()
export class DataService {


	constructor(private http: Http) { }
	private hourlyUrl: string = "http://api.wunderground.com/api/238e926ce0161f62/hourly/q/76148.json";
	private conditionsUrl: string = "http://api.wunderground.com/api/238e926ce0161f62/conditions/q/76148.json";
	private weeklyUrl: string = "http://api.wunderground.com/api/238e926ce0161f62/forecast10day/q/76148.json";

	hourlyData(): Promise<DataObj> {
		return this.http.get(this.hourlyUrl)
		.toPromise().then(response => {
			console.log(response);
			return response.json() as DataObj})
		.catch(this.handleError);
	}

	cureentConditions(): Promise<DataObj> {
		return this.http.get(this.conditionsUrl)
		.toPromise().then(response => {
			console.log(response);
			return response.json() as DataObj})
		.catch(this.handleError);
	}

	weeklyForecast(): Promise<DataObj> {
		return this.http.get(this.weeklyUrl)
		.toPromise().then(response => {
			console.log(response);
			return response.json() as DataObj})
		.catch(this.handleError);
	}


	private handleError(error: any): Promise<any>{
		console.error("an error ocurred", error);
		return Promise.reject(error.message || error);
	}
}