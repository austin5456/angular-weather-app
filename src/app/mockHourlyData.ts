

export class MockHourlyData {

	whichData: boolean = true;

	createData(): Promise<{}>{
		const data1: object = 

{
	"hourly_forecast": [
		{
		"FCTTIME": {
		"hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "22","mday_padded": "22","yday": "294","isdst": "1","epoch": "1508688000","pretty": "11:00 AM CDT on October 22, 2017","civil": "11:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "68", "metric": "20"},
		"dewpoint": {"english": "55", "metric": "13"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "56",
		"wspd": {"english": "13", "metric": "21"},
		"wdir": {"dir": "N", "degrees": "351"},
		"wx": "Partly Cloudy",
		"uvi": "3",
		"humidity": "63",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "68", "metric": "20"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.17", "metric": "1022"}
		}
		,
		{
		"FCTTIME": {
		"hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "22","mday_padded": "22","yday": "294","isdst": "1","epoch": "1508691600","pretty": "12:00 PM CDT on October 22, 2017","civil": "12:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "70", "metric": "21"},
		"dewpoint": {"english": "52", "metric": "11"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "47",
		"wspd": {"english": "13", "metric": "21"},
		"wdir": {"dir": "N", "degrees": "354"},
		"wx": "Partly Cloudy",
		"uvi": "5",
		"humidity": "52",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "70", "metric": "21"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.17", "metric": "1022"}
		}
		,
		{
		"FCTTIME": {
		"hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "22","mday_padded": "22","yday": "294","isdst": "1","epoch": "1508695200","pretty": "1:00 PM CDT on October 22, 2017","civil": "1:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "72", "metric": "22"},
		"dewpoint": {"english": "47", "metric": "8"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "40",
		"wspd": {"english": "14", "metric": "23"},
		"wdir": {"dir": "N", "degrees": "355"},
		"wx": "Partly Cloudy",
		"uvi": "6",
		"humidity": "41",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "72", "metric": "22"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.18", "metric": "1022"}
		}
		,
		{
		"FCTTIME": {
		"hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "22","mday_padded": "22","yday": "294","isdst": "1","epoch": "1508698800","pretty": "2:00 PM CDT on October 22, 2017","civil": "2:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "73", "metric": "23"},
		"dewpoint": {"english": "39", "metric": "4"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "16", "metric": "26"},
		"wdir": {"dir": "N", "degrees": "355"},
		"wx": "Sunny",
		"uvi": "6",
		"humidity": "29",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "73", "metric": "23"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.16", "metric": "1021"}
		}
		,
		{
		"FCTTIME": {
		"hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "22","mday_padded": "22","yday": "294","isdst": "1","epoch": "1508702400","pretty": "3:00 PM CDT on October 22, 2017","civil": "3:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "73", "metric": "23"},
		"dewpoint": {"english": "37", "metric": "3"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "15", "metric": "24"},
		"wdir": {"dir": "N", "degrees": "357"},
		"wx": "Sunny",
		"uvi": "4",
		"humidity": "26",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "73", "metric": "23"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.15", "metric": "1021"}
		}
		,
		{
		"FCTTIME": {
		"hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "22","mday_padded": "22","yday": "294","isdst": "1","epoch": "1508706000","pretty": "4:00 PM CDT on October 22, 2017","civil": "4:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "74", "metric": "23"},
		"dewpoint": {"english": "36", "metric": "2"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "15", "metric": "24"},
		"wdir": {"dir": "N", "degrees": "358"},
		"wx": "Sunny",
		"uvi": "3",
		"humidity": "26",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "74", "metric": "23"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.14", "metric": "1021"}
		}
		,
		{
		"FCTTIME": {
		"hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "22","mday_padded": "22","yday": "294","isdst": "1","epoch": "1508709600","pretty": "5:00 PM CDT on October 22, 2017","civil": "5:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "73", "metric": "23"},
		"dewpoint": {"english": "36", "metric": "2"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "13", "metric": "21"},
		"wdir": {"dir": "N", "degrees": "358"},
		"wx": "Sunny",
		"uvi": "1",
		"humidity": "26",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "73", "metric": "23"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.13", "metric": "1020"}
		}
		,
		{
		"FCTTIME": {
		"hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "22","mday_padded": "22","yday": "294","isdst": "1","epoch": "1508713200","pretty": "6:00 PM CDT on October 22, 2017","civil": "6:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "72", "metric": "22"},
		"dewpoint": {"english": "36", "metric": "2"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "11", "metric": "18"},
		"wdir": {"dir": "N", "degrees": "0"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "27",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "72", "metric": "22"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.14", "metric": "1021"}
		}
		,
		{
		"FCTTIME": {
		"hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "22","mday_padded": "22","yday": "294","isdst": "1","epoch": "1508716800","pretty": "7:00 PM CDT on October 22, 2017","civil": "7:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "68", "metric": "20"},
		"dewpoint": {"english": "37", "metric": "3"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "8", "metric": "13"},
		"wdir": {"dir": "N", "degrees": "0"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "31",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "68", "metric": "20"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.15", "metric": "1021"}
		}
		,
		{
		"FCTTIME": {
		"hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "22","mday_padded": "22","yday": "294","isdst": "1","epoch": "1508720400","pretty": "8:00 PM CDT on October 22, 2017","civil": "8:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "64", "metric": "18"},
		"dewpoint": {"english": "38", "metric": "3"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "N", "degrees": "358"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "38",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "64", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.17", "metric": "1022"}
		}
		,
		{
		"FCTTIME": {
		"hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "22","mday_padded": "22","yday": "294","isdst": "1","epoch": "1508724000","pretty": "9:00 PM CDT on October 22, 2017","civil": "9:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "62", "metric": "17"},
		"dewpoint": {"english": "39", "metric": "4"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "N", "degrees": "356"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "43",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "62", "metric": "17"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.18", "metric": "1022"}
		}
		,
		{
		"FCTTIME": {
		"hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "22","mday_padded": "22","yday": "294","isdst": "1","epoch": "1508727600","pretty": "10:00 PM CDT on October 22, 2017","civil": "10:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "59", "metric": "15"},
		"dewpoint": {"english": "40", "metric": "4"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "NNW", "degrees": "347"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "49",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "59", "metric": "15"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.19", "metric": "1022"}
		}
		,
		{
		"FCTTIME": {
		"hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "22","mday_padded": "22","yday": "294","isdst": "1","epoch": "1508731200","pretty": "11:00 PM CDT on October 22, 2017","civil": "11:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "57", "metric": "14"},
		"dewpoint": {"english": "40", "metric": "4"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "NNW", "degrees": "331"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "52",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "57", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.19", "metric": "1022"}
		}
		,
		{
		"FCTTIME": {
		"hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "23","mday_padded": "23","yday": "295","isdst": "1","epoch": "1508734800","pretty": "12:00 AM CDT on October 23, 2017","civil": "12:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "56", "metric": "13"},
		"dewpoint": {"english": "41", "metric": "5"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "3", "metric": "5"},
		"wdir": {"dir": "WNW", "degrees": "303"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "59",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "56", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.18", "metric": "1022"}
		}
		,
		{
		"FCTTIME": {
		"hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "23","mday_padded": "23","yday": "295","isdst": "1","epoch": "1508738400","pretty": "1:00 AM CDT on October 23, 2017","civil": "1:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "55", "metric": "13"},
		"dewpoint": {"english": "43", "metric": "6"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "2", "metric": "3"},
		"wdir": {"dir": "WNW", "degrees": "294"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "64",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "55", "metric": "13"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.17", "metric": "1022"}
		}
		,
		{
		"FCTTIME": {
		"hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "23","mday_padded": "23","yday": "295","isdst": "1","epoch": "1508742000","pretty": "2:00 AM CDT on October 23, 2017","civil": "2:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "54", "metric": "12"},
		"dewpoint": {"english": "43", "metric": "6"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "3", "metric": "5"},
		"wdir": {"dir": "WNW", "degrees": "288"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "67",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "54", "metric": "12"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "30.17", "metric": "1022"}
		}
		,
		{
		"FCTTIME": {
		"hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "23","mday_padded": "23","yday": "295","isdst": "1","epoch": "1508745600","pretty": "3:00 AM CDT on October 23, 2017","civil": "3:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "52", "metric": "11"},
		"dewpoint": {"english": "44", "metric": "7"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "3", "metric": "5"},
		"wdir": {"dir": "W", "degrees": "267"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "72",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "52", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "30.16", "metric": "1021"}
		}
		,
		{
		"FCTTIME": {
		"hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "23","mday_padded": "23","yday": "295","isdst": "1","epoch": "1508749200","pretty": "4:00 AM CDT on October 23, 2017","civil": "4:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "52", "metric": "11"},
		"dewpoint": {"english": "43", "metric": "6"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "2", "metric": "3"},
		"wdir": {"dir": "W", "degrees": "267"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "73",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "52", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "30.15", "metric": "1021"}
		}
		,
		{
		"FCTTIME": {
		"hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "23","mday_padded": "23","yday": "295","isdst": "1","epoch": "1508752800","pretty": "5:00 AM CDT on October 23, 2017","civil": "5:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "52", "metric": "11"},
		"dewpoint": {"english": "44", "metric": "7"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "2", "metric": "3"},
		"wdir": {"dir": "W", "degrees": "263"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "75",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "52", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "30.14", "metric": "1021"}
		}
		,
		{
		"FCTTIME": {
		"hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "23","mday_padded": "23","yday": "295","isdst": "1","epoch": "1508756400","pretty": "6:00 AM CDT on October 23, 2017","civil": "6:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "51", "metric": "11"},
		"dewpoint": {"english": "44", "metric": "7"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "2", "metric": "3"},
		"wdir": {"dir": "WSW", "degrees": "245"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "77",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "51", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "30.14", "metric": "1021"}
		}
		,
		{
		"FCTTIME": {
		"hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "23","mday_padded": "23","yday": "295","isdst": "1","epoch": "1508760000","pretty": "7:00 AM CDT on October 23, 2017","civil": "7:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "51", "metric": "11"},
		"dewpoint": {"english": "43", "metric": "6"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "2", "metric": "3"},
		"wdir": {"dir": "WSW", "degrees": "243"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "74",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "51", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "30.14", "metric": "1021"}
		}
		,
		{
		"FCTTIME": {
		"hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "23","mday_padded": "23","yday": "295","isdst": "1","epoch": "1508763600","pretty": "8:00 AM CDT on October 23, 2017","civil": "8:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "52", "metric": "11"},
		"dewpoint": {"english": "43", "metric": "6"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "3", "metric": "5"},
		"wdir": {"dir": "WSW", "degrees": "247"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "70",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "52", "metric": "11"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.14", "metric": "1021"}
		}
		,
		{
		"FCTTIME": {
		"hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "23","mday_padded": "23","yday": "295","isdst": "1","epoch": "1508767200","pretty": "9:00 AM CDT on October 23, 2017","civil": "9:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "57", "metric": "14"},
		"dewpoint": {"english": "44", "metric": "7"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "SW", "degrees": "236"},
		"wx": "Sunny",
		"uvi": "1",
		"humidity": "61",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "57", "metric": "14"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.16", "metric": "1021"}
		}
		,
		{
		"FCTTIME": {
		"hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "23","mday_padded": "23","yday": "295","isdst": "1","epoch": "1508770800","pretty": "10:00 AM CDT on October 23, 2017","civil": "10:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "64", "metric": "18"},
		"dewpoint": {"english": "43", "metric": "6"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "7", "metric": "11"},
		"wdir": {"dir": "SW", "degrees": "228"},
		"wx": "Sunny",
		"uvi": "2",
		"humidity": "47",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "64", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.16", "metric": "1021"}
		}
		,
		{
		"FCTTIME": {
		"hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "23","mday_padded": "23","yday": "295","isdst": "1","epoch": "1508774400","pretty": "11:00 AM CDT on October 23, 2017","civil": "11:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "70", "metric": "21"},
		"dewpoint": {"english": "42", "metric": "6"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "9", "metric": "14"},
		"wdir": {"dir": "SW", "degrees": "234"},
		"wx": "Sunny",
		"uvi": "3",
		"humidity": "37",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "70", "metric": "21"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.16", "metric": "1021"}
		}
		,
		{
		"FCTTIME": {
		"hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "23","mday_padded": "23","yday": "295","isdst": "1","epoch": "1508778000","pretty": "12:00 PM CDT on October 23, 2017","civil": "12:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "74", "metric": "23"},
		"dewpoint": {"english": "41", "metric": "5"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "WSW", "degrees": "238"},
		"wx": "Sunny",
		"uvi": "5",
		"humidity": "30",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "74", "metric": "23"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.14", "metric": "1021"}
		}
		,
		{
		"FCTTIME": {
		"hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "23","mday_padded": "23","yday": "295","isdst": "1","epoch": "1508781600","pretty": "1:00 PM CDT on October 23, 2017","civil": "1:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "78", "metric": "26"},
		"dewpoint": {"english": "40", "metric": "4"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "WSW", "degrees": "246"},
		"wx": "Sunny",
		"uvi": "6",
		"humidity": "25",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "78", "metric": "26"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.13", "metric": "1020"}
		}
		,
		{
		"FCTTIME": {
		"hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "23","mday_padded": "23","yday": "295","isdst": "1","epoch": "1508785200","pretty": "2:00 PM CDT on October 23, 2017","civil": "2:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "80", "metric": "27"},
		"dewpoint": {"english": "40", "metric": "4"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "WSW", "degrees": "255"},
		"wx": "Sunny",
		"uvi": "5",
		"humidity": "24",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "80", "metric": "27"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.1", "metric": "1019"}
		}
		,
		{
		"FCTTIME": {
		"hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "23","mday_padded": "23","yday": "295","isdst": "1","epoch": "1508788800","pretty": "3:00 PM CDT on October 23, 2017","civil": "3:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "82", "metric": "28"},
		"dewpoint": {"english": "42", "metric": "6"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "W", "degrees": "274"},
		"wx": "Sunny",
		"uvi": "4",
		"humidity": "24",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "82", "metric": "28"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.08", "metric": "1019"}
		}
		,
		{
		"FCTTIME": {
		"hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "23","mday_padded": "23","yday": "295","isdst": "1","epoch": "1508792400","pretty": "4:00 PM CDT on October 23, 2017","civil": "4:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "83", "metric": "28"},
		"dewpoint": {"english": "43", "metric": "6"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "WNW", "degrees": "292"},
		"wx": "Sunny",
		"uvi": "2",
		"humidity": "25",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "83", "metric": "28"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.06", "metric": "1018"}
		}
		,
		{
		"FCTTIME": {
		"hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "23","mday_padded": "23","yday": "295","isdst": "1","epoch": "1508796000","pretty": "5:00 PM CDT on October 23, 2017","civil": "5:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "82", "metric": "28"},
		"dewpoint": {"english": "45", "metric": "7"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "NW", "degrees": "304"},
		"wx": "Sunny",
		"uvi": "1",
		"humidity": "27",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "82", "metric": "28"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.05", "metric": "1018"}
		}
		,
		{
		"FCTTIME": {
		"hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "23","mday_padded": "23","yday": "295","isdst": "1","epoch": "1508799600","pretty": "6:00 PM CDT on October 23, 2017","civil": "6:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "80", "metric": "27"},
		"dewpoint": {"english": "46", "metric": "8"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "9", "metric": "14"},
		"wdir": {"dir": "NW", "degrees": "316"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "30",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "80", "metric": "27"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.06", "metric": "1018"}
		}
		,
		{
		"FCTTIME": {
		"hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "23","mday_padded": "23","yday": "295","isdst": "1","epoch": "1508803200","pretty": "7:00 PM CDT on October 23, 2017","civil": "7:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "76", "metric": "24"},
		"dewpoint": {"english": "46", "metric": "8"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "8", "metric": "13"},
		"wdir": {"dir": "NNW", "degrees": "335"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "34",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "76", "metric": "24"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.09", "metric": "1019"}
		}
		,
		{
		"FCTTIME": {
		"hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "23","mday_padded": "23","yday": "295","isdst": "1","epoch": "1508806800","pretty": "8:00 PM CDT on October 23, 2017","civil": "8:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "72", "metric": "22"},
		"dewpoint": {"english": "47", "metric": "8"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "8", "metric": "13"},
		"wdir": {"dir": "N", "degrees": "349"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "41",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "72", "metric": "22"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.12", "metric": "1020"}
		}
		,
		{
		"FCTTIME": {
		"hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "23","mday_padded": "23","yday": "295","isdst": "1","epoch": "1508810400","pretty": "9:00 PM CDT on October 23, 2017","civil": "9:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "70", "metric": "21"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "0",
		"wspd": {"english": "9", "metric": "14"},
		"wdir": {"dir": "N", "degrees": "359"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "46",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "70", "metric": "21"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.15", "metric": "1021"}
		}
		,
		{
		"FCTTIME": {
		"hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "23","mday_padded": "23","yday": "295","isdst": "1","epoch": "1508814000","pretty": "10:00 PM CDT on October 23, 2017","civil": "10:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "68", "metric": "20"},
		"dewpoint": {"english": "48", "metric": "9"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "2",
		"wspd": {"english": "11", "metric": "18"},
		"wdir": {"dir": "N", "degrees": "7"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "49",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "68", "metric": "20"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "30.19", "metric": "1022"}
		}
	]
};

const data2: object = 
{
	"hourly_forecast": [
		{
		"FCTTIME": {
		"hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "23","mday_padded": "23","yday": "295","isdst": "1","epoch": "1508803200","pretty": "7:00 PM CDT on October 23, 2017","civil": "7:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "48", "metric": "9"},
		"dewpoint": {"english": "45", "metric": "7"},
		"condition": "Chance of Rain",
		"icon": "chancerain",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_chancerain.gif",
		"fctcode": "12",
		"sky": "99",
		"wspd": {"english": "2", "metric": "3"},
		"wdir": {"dir": "NNW", "degrees": "340"},
		"wx": "Few Showers",
		"uvi": "0",
		"humidity": "90",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "48", "metric": "9"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "33",
		"mslp": {"english": "29.69", "metric": "1005"}
		}
		,
		{
		"FCTTIME": {
		"hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "23","mday_padded": "23","yday": "295","isdst": "1","epoch": "1508806800","pretty": "8:00 PM CDT on October 23, 2017","civil": "8:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "47", "metric": "8"},
		"dewpoint": {"english": "46", "metric": "8"},
		"condition": "Overcast",
		"icon": "cloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_cloudy.gif",
		"fctcode": "4",
		"sky": "98",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NNW", "degrees": "336"},
		"wx": "Cloudy",
		"uvi": "0",
		"humidity": "96",
		"windchill": {"english": "43", "metric": "6"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "43", "metric": "6"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "22",
		"mslp": {"english": "29.68", "metric": "1005"}
		}
		,
		{
		"FCTTIME": {
		"hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "23","mday_padded": "23","yday": "295","isdst": "1","epoch": "1508810400","pretty": "9:00 PM CDT on October 23, 2017","civil": "9:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "46", "metric": "8"},
		"dewpoint": {"english": "44", "metric": "7"},
		"condition": "Overcast",
		"icon": "cloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_cloudy.gif",
		"fctcode": "4",
		"sky": "100",
		"wspd": {"english": "7", "metric": "11"},
		"wdir": {"dir": "NNW", "degrees": "332"},
		"wx": "Cloudy",
		"uvi": "0",
		"humidity": "94",
		"windchill": {"english": "43", "metric": "6"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "43", "metric": "6"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "24",
		"mslp": {"english": "29.68", "metric": "1005"}
		}
		,
		{
		"FCTTIME": {
		"hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "23","mday_padded": "23","yday": "295","isdst": "1","epoch": "1508814000","pretty": "10:00 PM CDT on October 23, 2017","civil": "10:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "47", "metric": "8"},
		"dewpoint": {"english": "43", "metric": "6"},
		"condition": "Chance of Rain",
		"icon": "chancerain",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_chancerain.gif",
		"fctcode": "12",
		"sky": "100",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "NNW", "degrees": "335"},
		"wx": "Showers",
		"uvi": "0",
		"humidity": "87",
		"windchill": {"english": "42", "metric": "5"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "42", "metric": "5"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "43",
		"mslp": {"english": "29.67", "metric": "1005"}
		}
		,
		{
		"FCTTIME": {
		"hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "23","mday_padded": "23","yday": "295","isdst": "1","epoch": "1508817600","pretty": "11:00 PM CDT on October 23, 2017","civil": "11:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "45", "metric": "7"},
		"dewpoint": {"english": "42", "metric": "6"},
		"condition": "Chance of Rain",
		"icon": "chancerain",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_chancerain.gif",
		"fctcode": "12",
		"sky": "100",
		"wspd": {"english": "10", "metric": "16"},
		"wdir": {"dir": "NNW", "degrees": "337"},
		"wx": "Showers",
		"uvi": "0",
		"humidity": "89",
		"windchill": {"english": "39", "metric": "4"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "39", "metric": "4"},
		"qpf": {"english": "0.02", "metric": "1"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "57",
		"mslp": {"english": "29.66", "metric": "1004"}
		}
		,
		{
		"FCTTIME": {
		"hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "24","mday_padded": "24","yday": "296","isdst": "1","epoch": "1508821200","pretty": "12:00 AM CDT on October 24, 2017","civil": "12:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "45", "metric": "7"},
		"dewpoint": {"english": "43", "metric": "6"},
		"condition": "Chance of Rain",
		"icon": "chancerain",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_chancerain.gif",
		"fctcode": "12",
		"sky": "100",
		"wspd": {"english": "12", "metric": "19"},
		"wdir": {"dir": "NNW", "degrees": "336"},
		"wx": "Light Rain",
		"uvi": "0",
		"humidity": "93",
		"windchill": {"english": "39", "metric": "4"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "39", "metric": "4"},
		"qpf": {"english": "0.02", "metric": "1"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "74",
		"mslp": {"english": "29.64", "metric": "1004"}
		}
		,
		{
		"FCTTIME": {
		"hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "24","mday_padded": "24","yday": "296","isdst": "1","epoch": "1508824800","pretty": "1:00 AM CDT on October 24, 2017","civil": "1:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "45", "metric": "7"},
		"dewpoint": {"english": "43", "metric": "6"},
		"condition": "Rain",
		"icon": "rain",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_rain.gif",
		"fctcode": "13",
		"sky": "100",
		"wspd": {"english": "12", "metric": "19"},
		"wdir": {"dir": "NNW", "degrees": "338"},
		"wx": "Rain",
		"uvi": "0",
		"humidity": "92",
		"windchill": {"english": "39", "metric": "4"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "39", "metric": "4"},
		"qpf": {"english": "0.03", "metric": "1"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "83",
		"mslp": {"english": "29.62", "metric": "1003"}
		}
		,
		{
		"FCTTIME": {
		"hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "24","mday_padded": "24","yday": "296","isdst": "1","epoch": "1508828400","pretty": "2:00 AM CDT on October 24, 2017","civil": "2:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "45", "metric": "7"},
		"dewpoint": {"english": "43", "metric": "6"},
		"condition": "Rain",
		"icon": "rain",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_rain.gif",
		"fctcode": "13",
		"sky": "100",
		"wspd": {"english": "12", "metric": "19"},
		"wdir": {"dir": "NNW", "degrees": "340"},
		"wx": "Rain",
		"uvi": "0",
		"humidity": "93",
		"windchill": {"english": "39", "metric": "4"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "39", "metric": "4"},
		"qpf": {"english": "0.03", "metric": "1"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "84",
		"mslp": {"english": "29.61", "metric": "1003"}
		}
		,
		{
		"FCTTIME": {
		"hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "24","mday_padded": "24","yday": "296","isdst": "1","epoch": "1508832000","pretty": "3:00 AM CDT on October 24, 2017","civil": "3:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "44", "metric": "7"},
		"dewpoint": {"english": "42", "metric": "6"},
		"condition": "Rain",
		"icon": "rain",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_rain.gif",
		"fctcode": "13",
		"sky": "100",
		"wspd": {"english": "14", "metric": "23"},
		"wdir": {"dir": "NNW", "degrees": "344"},
		"wx": "Rain",
		"uvi": "0",
		"humidity": "93",
		"windchill": {"english": "38", "metric": "3"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "38", "metric": "3"},
		"qpf": {"english": "0.03", "metric": "1"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "85",
		"mslp": {"english": "29.6", "metric": "1002"}
		}
		,
		{
		"FCTTIME": {
		"hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "24","mday_padded": "24","yday": "296","isdst": "1","epoch": "1508835600","pretty": "4:00 AM CDT on October 24, 2017","civil": "4:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "43", "metric": "6"},
		"dewpoint": {"english": "41", "metric": "5"},
		"condition": "Rain",
		"icon": "rain",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_rain.gif",
		"fctcode": "13",
		"sky": "100",
		"wspd": {"english": "15", "metric": "24"},
		"wdir": {"dir": "NNW", "degrees": "346"},
		"wx": "Rain",
		"uvi": "0",
		"humidity": "93",
		"windchill": {"english": "35", "metric": "2"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "35", "metric": "2"},
		"qpf": {"english": "0.03", "metric": "1"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "91",
		"mslp": {"english": "29.59", "metric": "1002"}
		}
		,
		{
		"FCTTIME": {
		"hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "24","mday_padded": "24","yday": "296","isdst": "1","epoch": "1508839200","pretty": "5:00 AM CDT on October 24, 2017","civil": "5:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "41", "metric": "5"},
		"dewpoint": {"english": "39", "metric": "4"},
		"condition": "Rain",
		"icon": "rain",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_rain.gif",
		"fctcode": "13",
		"sky": "100",
		"wspd": {"english": "16", "metric": "26"},
		"wdir": {"dir": "NNW", "degrees": "344"},
		"wx": "Rain",
		"uvi": "0",
		"humidity": "93",
		"windchill": {"english": "33", "metric": "0"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "33", "metric": "0"},
		"qpf": {"english": "0.03", "metric": "1"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "90",
		"mslp": {"english": "29.59", "metric": "1002"}
		}
		,
		{
		"FCTTIME": {
		"hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "24","mday_padded": "24","yday": "296","isdst": "1","epoch": "1508842800","pretty": "6:00 AM CDT on October 24, 2017","civil": "6:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "40", "metric": "4"},
		"dewpoint": {"english": "39", "metric": "4"},
		"condition": "Chance of Rain",
		"icon": "chancerain",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_chancerain.gif",
		"fctcode": "12",
		"sky": "100",
		"wspd": {"english": "17", "metric": "27"},
		"wdir": {"dir": "NNW", "degrees": "341"},
		"wx": "Light Rain",
		"uvi": "0",
		"humidity": "93",
		"windchill": {"english": "30", "metric": "-1"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "30", "metric": "-1"},
		"qpf": {"english": "0.02", "metric": "1"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "81",
		"mslp": {"english": "29.59", "metric": "1002"}
		}
		,
		{
		"FCTTIME": {
		"hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "24","mday_padded": "24","yday": "296","isdst": "1","epoch": "1508846400","pretty": "7:00 AM CDT on October 24, 2017","civil": "7:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "39", "metric": "4"},
		"dewpoint": {"english": "38", "metric": "3"},
		"condition": "Rain",
		"icon": "rain",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_rain.gif",
		"fctcode": "13",
		"sky": "100",
		"wspd": {"english": "17", "metric": "27"},
		"wdir": {"dir": "NNW", "degrees": "341"},
		"wx": "Rain",
		"uvi": "0",
		"humidity": "95",
		"windchill": {"english": "30", "metric": "-1"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "30", "metric": "-1"},
		"qpf": {"english": "0.04", "metric": "1"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "85",
		"mslp": {"english": "29.6", "metric": "1002"}
		}
		,
		{
		"FCTTIME": {
		"hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "24","mday_padded": "24","yday": "296","isdst": "1","epoch": "1508850000","pretty": "8:00 AM CDT on October 24, 2017","civil": "8:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "37", "metric": "3"},
		"dewpoint": {"english": "37", "metric": "3"},
		"condition": "Rain",
		"icon": "rain",
		"icon_url":"http://icons.wxug.com/i/c/k/rain.gif",
		"fctcode": "13",
		"sky": "100",
		"wspd": {"english": "18", "metric": "29"},
		"wdir": {"dir": "NNW", "degrees": "339"},
		"wx": "Rain",
		"uvi": "0",
		"humidity": "100",
		"windchill": {"english": "28", "metric": "-2"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "28", "metric": "-2"},
		"qpf": {"english": "0.04", "metric": "1"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "92",
		"mslp": {"english": "29.62", "metric": "1003"}
		}
		,
		{
		"FCTTIME": {
		"hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "24","mday_padded": "24","yday": "296","isdst": "1","epoch": "1508853600","pretty": "9:00 AM CDT on October 24, 2017","civil": "9:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "37", "metric": "3"},
		"dewpoint": {"english": "37", "metric": "3"},
		"condition": "Rain",
		"icon": "rain",
		"icon_url":"http://icons.wxug.com/i/c/k/rain.gif",
		"fctcode": "13",
		"sky": "100",
		"wspd": {"english": "18", "metric": "29"},
		"wdir": {"dir": "NNW", "degrees": "338"},
		"wx": "Rain",
		"uvi": "0",
		"humidity": "100",
		"windchill": {"english": "28", "metric": "-2"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "28", "metric": "-2"},
		"qpf": {"english": "0.04", "metric": "1"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "94",
		"mslp": {"english": "29.64", "metric": "1004"}
		}
		,
		{
		"FCTTIME": {
		"hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "24","mday_padded": "24","yday": "296","isdst": "1","epoch": "1508857200","pretty": "10:00 AM CDT on October 24, 2017","civil": "10:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "38", "metric": "3"},
		"dewpoint": {"english": "36", "metric": "2"},
		"condition": "Rain",
		"icon": "rain",
		"icon_url":"http://icons.wxug.com/i/c/k/rain.gif",
		"fctcode": "13",
		"sky": "100",
		"wspd": {"english": "19", "metric": "31"},
		"wdir": {"dir": "NNW", "degrees": "338"},
		"wx": "Rain",
		"uvi": "0",
		"humidity": "95",
		"windchill": {"english": "27", "metric": "-3"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "27", "metric": "-3"},
		"qpf": {"english": "0.05", "metric": "1"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "90",
		"mslp": {"english": "29.66", "metric": "1004"}
		}
		,
		{
		"FCTTIME": {
		"hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "24","mday_padded": "24","yday": "296","isdst": "1","epoch": "1508860800","pretty": "11:00 AM CDT on October 24, 2017","civil": "11:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "37", "metric": "3"},
		"dewpoint": {"english": "35", "metric": "2"},
		"condition": "Rain",
		"icon": "rain",
		"icon_url":"http://icons.wxug.com/i/c/k/rain.gif",
		"fctcode": "13",
		"sky": "100",
		"wspd": {"english": "19", "metric": "31"},
		"wdir": {"dir": "NNW", "degrees": "334"},
		"wx": "Rain",
		"uvi": "0",
		"humidity": "91",
		"windchill": {"english": "27", "metric": "-3"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "27", "metric": "-3"},
		"qpf": {"english": "0.05", "metric": "1"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "92",
		"mslp": {"english": "29.67", "metric": "1005"}
		}
		,
		{
		"FCTTIME": {
		"hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "24","mday_padded": "24","yday": "296","isdst": "1","epoch": "1508864400","pretty": "12:00 PM CDT on October 24, 2017","civil": "12:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "35", "metric": "2"},
		"dewpoint": {"english": "35", "metric": "2"},
		"condition": "Snow",
		"icon": "snow",
		"icon_url":"http://icons.wxug.com/i/c/k/snow.gif",
		"fctcode": "21",
		"sky": "100",
		"wspd": {"english": "20", "metric": "32"},
		"wdir": {"dir": "NNW", "degrees": "334"},
		"wx": "Snow/Wind",
		"uvi": "0",
		"humidity": "99",
		"windchill": {"english": "25", "metric": "-4"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "25", "metric": "-4"},
		"qpf": {"english": "0.05", "metric": "1"},
		"snow": {"english": "0.4", "metric": "10"},
		"pop": "90",
		"mslp": {"english": "29.68", "metric": "1005"}
		}
		,
		{
		"FCTTIME": {
		"hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "24","mday_padded": "24","yday": "296","isdst": "1","epoch": "1508868000","pretty": "1:00 PM CDT on October 24, 2017","civil": "1:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "35", "metric": "2"},
		"dewpoint": {"english": "34", "metric": "1"},
		"condition": "Snow",
		"icon": "snow",
		"icon_url":"http://icons.wxug.com/i/c/k/snow.gif",
		"fctcode": "21",
		"sky": "100",
		"wspd": {"english": "21", "metric": "34"},
		"wdir": {"dir": "NNW", "degrees": "328"},
		"wx": "Snow/Wind",
		"uvi": "1",
		"humidity": "96",
		"windchill": {"english": "24", "metric": "-4"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "24", "metric": "-4"},
		"qpf": {"english": "0.04", "metric": "1"},
		"snow": {"english": "0.3", "metric": "8"},
		"pop": "87",
		"mslp": {"english": "29.69", "metric": "1005"}
		}
		,
		{
		"FCTTIME": {
		"hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "24","mday_padded": "24","yday": "296","isdst": "1","epoch": "1508871600","pretty": "2:00 PM CDT on October 24, 2017","civil": "2:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "35", "metric": "2"},
		"dewpoint": {"english": "33", "metric": "1"},
		"condition": "Snow",
		"icon": "snow",
		"icon_url":"http://icons.wxug.com/i/c/k/snow.gif",
		"fctcode": "21",
		"sky": "100",
		"wspd": {"english": "21", "metric": "34"},
		"wdir": {"dir": "NW", "degrees": "327"},
		"wx": "Snow/Wind",
		"uvi": "0",
		"humidity": "91",
		"windchill": {"english": "24", "metric": "-4"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "24", "metric": "-4"},
		"qpf": {"english": "0.04", "metric": "1"},
		"snow": {"english": "0.3", "metric": "8"},
		"pop": "85",
		"mslp": {"english": "29.69", "metric": "1005"}
		}
		,
		{
		"FCTTIME": {
		"hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "24","mday_padded": "24","yday": "296","isdst": "1","epoch": "1508875200","pretty": "3:00 PM CDT on October 24, 2017","civil": "3:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "35", "metric": "2"},
		"dewpoint": {"english": "32", "metric": "0"},
		"condition": "Snow",
		"icon": "snow",
		"icon_url":"http://icons.wxug.com/i/c/k/snow.gif",
		"fctcode": "21",
		"sky": "100",
		"wspd": {"english": "20", "metric": "32"},
		"wdir": {"dir": "NW", "degrees": "324"},
		"wx": "Snow/Wind",
		"uvi": "0",
		"humidity": "89",
		"windchill": {"english": "25", "metric": "-4"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "25", "metric": "-4"},
		"qpf": {"english": "0.03", "metric": "1"},
		"snow": {"english": "0.3", "metric": "8"},
		"pop": "73",
		"mslp": {"english": "29.69", "metric": "1005"}
		}
		,
		{
		"FCTTIME": {
		"hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "24","mday_padded": "24","yday": "296","isdst": "1","epoch": "1508878800","pretty": "4:00 PM CDT on October 24, 2017","civil": "4:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "37", "metric": "3"},
		"dewpoint": {"english": "31", "metric": "-1"},
		"condition": "Snow",
		"icon": "snow",
		"icon_url":"http://icons.wxug.com/i/c/k/snow.gif",
		"fctcode": "21",
		"sky": "99",
		"wspd": {"english": "20", "metric": "32"},
		"wdir": {"dir": "NW", "degrees": "325"},
		"wx": "Rain/Snow Showers/Wind",
		"uvi": "0",
		"humidity": "81",
		"windchill": {"english": "27", "metric": "-3"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "27", "metric": "-3"},
		"qpf": {"english": "0.01", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "47",
		"mslp": {"english": "29.7", "metric": "1006"}
		}
		,
		{
		"FCTTIME": {
		"hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "24","mday_padded": "24","yday": "296","isdst": "1","epoch": "1508882400","pretty": "5:00 PM CDT on October 24, 2017","civil": "5:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "36", "metric": "2"},
		"dewpoint": {"english": "31", "metric": "-1"},
		"condition": "Snow",
		"icon": "snow",
		"icon_url":"http://icons.wxug.com/i/c/k/snow.gif",
		"fctcode": "21",
		"sky": "95",
		"wspd": {"english": "19", "metric": "31"},
		"wdir": {"dir": "NW", "degrees": "323"},
		"wx": "Rain/Snow Showers",
		"uvi": "0",
		"humidity": "82",
		"windchill": {"english": "25", "metric": "-4"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "25", "metric": "-4"},
		"qpf": {"english": "0.01", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "31",
		"mslp": {"english": "29.72", "metric": "1006"}
		}
		,
		{
		"FCTTIME": {
		"hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "24","mday_padded": "24","yday": "296","isdst": "1","epoch": "1508886000","pretty": "6:00 PM CDT on October 24, 2017","civil": "6:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "36", "metric": "2"},
		"dewpoint": {"english": "30", "metric": "-1"},
		"condition": "Overcast",
		"icon": "cloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_cloudy.gif",
		"fctcode": "4",
		"sky": "83",
		"wspd": {"english": "16", "metric": "26"},
		"wdir": {"dir": "NW", "degrees": "327"},
		"wx": "Cloudy",
		"uvi": "0",
		"humidity": "80",
		"windchill": {"english": "26", "metric": "-3"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "26", "metric": "-3"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "24",
		"mslp": {"english": "29.73", "metric": "1007"}
		}
		,
		{
		"FCTTIME": {
		"hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "24","mday_padded": "24","yday": "296","isdst": "1","epoch": "1508889600","pretty": "7:00 PM CDT on October 24, 2017","civil": "7:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "36", "metric": "2"},
		"dewpoint": {"english": "30", "metric": "-1"},
		"condition": "Overcast",
		"icon": "cloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_cloudy.gif",
		"fctcode": "4",
		"sky": "80",
		"wspd": {"english": "15", "metric": "24"},
		"wdir": {"dir": "NNW", "degrees": "329"},
		"wx": "Cloudy",
		"uvi": "0",
		"humidity": "80",
		"windchill": {"english": "26", "metric": "-3"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "26", "metric": "-3"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.74", "metric": "1007"}
		}
		,
		{
		"FCTTIME": {
		"hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "24","mday_padded": "24","yday": "296","isdst": "1","epoch": "1508893200","pretty": "8:00 PM CDT on October 24, 2017","civil": "8:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "35", "metric": "2"},
		"dewpoint": {"english": "29", "metric": "-2"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "58",
		"wspd": {"english": "14", "metric": "23"},
		"wdir": {"dir": "NNW", "degrees": "331"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "78",
		"windchill": {"english": "27", "metric": "-3"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "27", "metric": "-3"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.75", "metric": "1007"}
		}
		,
		{
		"FCTTIME": {
		"hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "24","mday_padded": "24","yday": "296","isdst": "1","epoch": "1508896800","pretty": "9:00 PM CDT on October 24, 2017","civil": "9:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "35", "metric": "2"},
		"dewpoint": {"english": "28", "metric": "-2"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "29",
		"wspd": {"english": "14", "metric": "23"},
		"wdir": {"dir": "NW", "degrees": "327"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "73",
		"windchill": {"english": "27", "metric": "-3"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "27", "metric": "-3"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.76", "metric": "1008"}
		}
		,
		{
		"FCTTIME": {
		"hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "24","mday_padded": "24","yday": "296","isdst": "1","epoch": "1508900400","pretty": "10:00 PM CDT on October 24, 2017","civil": "10:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "35", "metric": "2"},
		"dewpoint": {"english": "27", "metric": "-3"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "18",
		"wspd": {"english": "13", "metric": "21"},
		"wdir": {"dir": "NNW", "degrees": "328"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "72",
		"windchill": {"english": "27", "metric": "-3"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "27", "metric": "-3"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "2",
		"mslp": {"english": "29.75", "metric": "1007"}
		}
		,
		{
		"FCTTIME": {
		"hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "24","mday_padded": "24","yday": "296","isdst": "1","epoch": "1508904000","pretty": "11:00 PM CDT on October 24, 2017","civil": "11:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "34", "metric": "1"},
		"dewpoint": {"english": "27", "metric": "-3"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "21",
		"wspd": {"english": "9", "metric": "14"},
		"wdir": {"dir": "NNW", "degrees": "327"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "75",
		"windchill": {"english": "26", "metric": "-3"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "26", "metric": "-3"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "3",
		"mslp": {"english": "29.75", "metric": "1007"}
		}
		,
		{
		"FCTTIME": {
		"hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "25","mday_padded": "25","yday": "297","isdst": "1","epoch": "1508907600","pretty": "12:00 AM CDT on October 25, 2017","civil": "12:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "34", "metric": "1"},
		"dewpoint": {"english": "27", "metric": "-3"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "27",
		"wspd": {"english": "9", "metric": "14"},
		"wdir": {"dir": "NW", "degrees": "319"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "75",
		"windchill": {"english": "26", "metric": "-3"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "26", "metric": "-3"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.74", "metric": "1007"}
		}
		,
		{
		"FCTTIME": {
		"hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "25","mday_padded": "25","yday": "297","isdst": "1","epoch": "1508911200","pretty": "1:00 AM CDT on October 25, 2017","civil": "1:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "34", "metric": "1"},
		"dewpoint": {"english": "27", "metric": "-3"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "30",
		"wspd": {"english": "8", "metric": "13"},
		"wdir": {"dir": "NW", "degrees": "312"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "77",
		"windchill": {"english": "27", "metric": "-3"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "27", "metric": "-3"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.74", "metric": "1007"}
		}
		,
		{
		"FCTTIME": {
		"hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "25","mday_padded": "25","yday": "297","isdst": "1","epoch": "1508914800","pretty": "2:00 AM CDT on October 25, 2017","civil": "2:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "33", "metric": "1"},
		"dewpoint": {"english": "27", "metric": "-3"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "30",
		"wspd": {"english": "7", "metric": "11"},
		"wdir": {"dir": "NW", "degrees": "308"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "77",
		"windchill": {"english": "28", "metric": "-2"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "28", "metric": "-2"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "5",
		"mslp": {"english": "29.72", "metric": "1006"}
		}
		,
		{
		"FCTTIME": {
		"hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "25","mday_padded": "25","yday": "297","isdst": "1","epoch": "1508918400","pretty": "3:00 AM CDT on October 25, 2017","civil": "3:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "33", "metric": "1"},
		"dewpoint": {"english": "27", "metric": "-3"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "35",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "WNW", "degrees": "297"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "78",
		"windchill": {"english": "28", "metric": "-2"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "28", "metric": "-2"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "5",
		"mslp": {"english": "29.69", "metric": "1005"}
		}
		,
		{
		"FCTTIME": {
		"hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "25","mday_padded": "25","yday": "297","isdst": "1","epoch": "1508922000","pretty": "4:00 AM CDT on October 25, 2017","civil": "4:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "32", "metric": "0"},
		"dewpoint": {"english": "27", "metric": "-3"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "48",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "WNW", "degrees": "300"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "82",
		"windchill": {"english": "27", "metric": "-3"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "27", "metric": "-3"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "7",
		"mslp": {"english": "29.67", "metric": "1005"}
		}
		,
		{
		"FCTTIME": {
		"hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "25","mday_padded": "25","yday": "297","isdst": "1","epoch": "1508925600","pretty": "5:00 AM CDT on October 25, 2017","civil": "5:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "32", "metric": "0"},
		"dewpoint": {"english": "28", "metric": "-2"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "53",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "WNW", "degrees": "299"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "85",
		"windchill": {"english": "27", "metric": "-3"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "27", "metric": "-3"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "17",
		"mslp": {"english": "29.65", "metric": "1004"}
		}
		,
		{
		"FCTTIME": {
		"hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "25","mday_padded": "25","yday": "297","isdst": "1","epoch": "1508929200","pretty": "6:00 AM CDT on October 25, 2017","civil": "6:00 AM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "32", "metric": "0"},
		"dewpoint": {"english": "29", "metric": "-2"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "56",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "WNW", "degrees": "287"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "86",
		"windchill": {"english": "27", "metric": "-3"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "27", "metric": "-3"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "10",
		"mslp": {"english": "29.63", "metric": "1003"}
		}
	]
};

		if (this.whichData) {
			this.whichData = false;
			return Promise.resolve(data1);
		}
		else {
			this.whichData = true;
			return Promise.resolve(data2);
		}

	}
	
}