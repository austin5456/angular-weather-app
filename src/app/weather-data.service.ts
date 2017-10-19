import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

//temporary testing
@Injectable()
export class TimeService {
	seconds: string;
	minutes: string;
	hours: string;
	ampm: string;

	startClock():void {

		let self = this;

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
				self.ampm = this.clockGears.ampm;
			},
			spitTime: function () {
				var secondString = this.clockGears.seconds.toString();
				var minuteString = this.clockGears.minutes.toString();
				var hourString = this.clockGears.hours.toString();
				var amPm = this.clockGears.ampm;
				var timeString = hourString + ":" + minuteString + ":" + secondString + " " + amPm;
				return timeString;
			},
			clockGears: {
				startInterval: function () {
					var myScope = this;
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
					if (this.hours >= 12) {
						this.ampm = "PM"
					}
					else {
						this.ampm = "AM";
					}
					this.displayFilter("hours", this.hours);
					self.ampm = this.ampm;
				},
				displayFilter: function(property, value) {
					if (property === "seconds" || property === "minutes") {
						value = (value <= 9) ? ("0" + value) : value;
					}

					if (property === "hours") {
						value = (value >= 12) ? (value - 12) : value;
						value = (value === 0) ? 12 : value;
					}

					self[property] = value;
				}
			}
		};
		clock.init();
	}
}
@Injectable()
export class WeatherDataService {

}