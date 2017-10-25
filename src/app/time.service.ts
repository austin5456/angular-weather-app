import { Injectable } from '@angular/core';

@Injectable()
export class TimeService {

	seconds: string;
	minutes: string;
	hours: string;
	ampm: string;

	spitTime():string {
		if (this.seconds){
			let timeString: string = this.hours + ":" + this.minutes + ":" + this.seconds + " " + this.ampm;
			return timeString;
		}
		else {return "Clock has not been initiated yet"}
	}

	startClock():void {

		let timeService = this;

		let clock = {
			init: function () {
				this.renderInitial();
				this.clockGears.startInterval();
			},
			renderInitial: function () {
				this.clockGears.extractTime();
				this.clockGears.displayFilter("seconds", this.clockGears.seconds);
				this.clockGears.displayFilter("minutes", this.clockGears.minutes);
				this.clockGears.displayFilter("hours", this.clockGears.hours);
				timeService.ampm = this.clockGears.ampm;
			},
			clockGears: {
				startInterval: function () {
					let myScope = this;
					setInterval(function () {
						myScope.updateSeconds();
					}, 1000);
				},
				extractTime: function () {
					this.date = new Date();
					this.seconds = this.date.getSeconds();
					this.minutes = this.date.getMinutes();
					this.hours = this.date.getHours();
					this.ampm = (this.hours >= 12) ? "PM" : "AM";
				},
				updateSeconds: function () {
					this.seconds += 1;
					if (this.seconds === 60) {
						this.seconds = 0;

						this.updateMinutes();
					}
					this.displayFilter("seconds", this.seconds);
				},
				updateMinutes: function () {
					this.minutes += 1;
					if (this.minutes === 60) {
						this.minutes = 0;
						this.updateHours()
					}
					this.displayFilter("minutes", this.minutes);
				},
				updateHours: function () {
					this.hours += 1;
					this.hours = (this.hours === 24) ? 0 : this.hours;
					this.ampm = (this.hours >= 12) ? "PM" : "AM";
					this.displayFilter("hours", this.hours);
				},
				displayFilter: function(property, value) {
					if (property === "seconds" || property === "minutes") {
						value = (value <= 9) ? ("0" + value) : value;
					}

					if (property === "hours") {
						timeService.ampm = this.ampm;
						value = (value >= 12) ? (value - 12) : value;
						value = (value === 0) ? 12 : value;
					}

					timeService[property] = value;
				}
			}
		};
		clock.init();
	}
}