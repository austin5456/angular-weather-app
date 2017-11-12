

export class HourlySequencer {
	public positionArray;

	 sequence (data) {
        this.positionArray = ["30px", "45px", "45px", "30px", "15px", "0", "0", "15px", "30px", "45px", "45px", "30px", "15px", "0", "0", "15px", "30px"];
        var dayOrNight;
        let positionString = "";
        for (var i = 0; i < 4; i++) {
            // if in day hours
            dayOrNight = (Number(data.hourly_forecast[(i * 3)].FCTTIME.hour >= 8 && Number(data.hourly_forecast[(i * 3)].FCTTIME.hour) <= 19) ? "D" : "N");
            positionString += dayOrNight;
        }
        let arrayLocation = {
            NNNN: 0,
            NNND: 1,
            NNDD: 2,
            NDDD: 3,
            DDDD: 4,
            DDDN: 5,
            DDNN: 6,
            DNNN: 7
        }[positionString];
    }
}