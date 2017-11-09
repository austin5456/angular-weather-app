import { Injectable } from '@angular/core';


import { Directive, Output, EventEmitter, Input, SimpleChange} from '@angular/core';

@Directive({
    selector: '[onCreate]'
})
export class OnCreate {}
@Injectable()
export class IconSwapper {

    urlToIconArr(iconUrls: string[]): string[] {
        let iconPositions: string[] = [];//populates an array with the background position to display icon from sprite
        iconUrls.forEach( 
            (url)=> iconPositions.push(this.swapIcon(url))
            );
        return iconPositions;
    }


    swapIcon(feed) {

        const icons = {
            day_partlycloudy: "-28% 39%",
            nt_partlycloudy: "-3% -20%",
            day_mostlycloudy: "73% 40%",
            nt_mostlycloudy: "72% -20%",
            day_clear: "0 40%",
            nt_clear: "-25% -40%",
            day_chancetstorms: "-78% -60%",
            nt_chancetstorms: "22% 20%",
            day_tstorms: "-3% -40%",
            nt_tstorms: "47% 20%",
            cloudy: "22% 59%",
            nt_cloudy: "47% -20%",
            chancerain: "-2% 60%",
            nt_chancerain: "97% 0",
            rain: "72.5% 60%",
            nt_rain: "-3% 20%",
            fog: "25% 40%",
            nt_fog: "25% -20%",
            snow: "75% 20%",
            nt_snow: "75% 20%"
        };

        switch (feed) {
            case "http://icons.wxug.com/i/c/k/partlycloudy.gif":
            return icons.day_partlycloudy;
            case "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif":
            return icons.nt_partlycloudy;
            case "http://icons.wxug.com/i/c/k/mostlycloudy.gif":
            return    icons.day_mostlycloudy;
            case "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif":
            return   icons.nt_mostlycloudy;
            case "http://icons.wxug.com/i/c/k/clear.gif":
            return    icons.day_clear;
            case "http://icons.wxug.com/i/c/k/nt_clear.gif":
            return   icons.nt_clear;
            case "http://icons.wxug.com/i/c/k/chancetstorms.gif":
            return   icons.day_chancetstorms;
            case "http://icons.wxug.com/i/c/k/nt_chancetstorms.gif":
            return   icons.nt_chancetstorms;
            case "http://icons.wxug.com/i/c/k/tstorms.gif":
            return   icons.day_tstorms;
            case "http://icons.wxug.com/i/c/k/nt_tstorms.gif":
            return   icons.nt_tstorms;
            case "http://icons.wxug.com/i/c/k/cloudy.gif":
            return icons.cloudy;
            case "http://icons.wxug.com/i/c/k/nt_cloudy.gif":
            return   icons.nt_cloudy;
            case "http://icons.wxug.com/i/c/k/chancerain.gif":
            return   icons.chancerain;
            case "http://icons.wxug.com/i/c/k/nt_chancerain.gif":
            return   icons.nt_chancerain;
            case "http://icons.wxug.com/i/c/k/rain.gif":
            return   icons.rain;
            case "http://icons.wxug.com/i/c/k/nt_rain.gif":
            return icons.nt_rain;
            case "http://icons.wxug.com/i/c/k/fog.gif":
            return  icons.fog;
            case "http://icons.wxug.com/i/c/k/nt_fog.gif":
            return  icons.nt_fog;
            case "http://icons.wxug.com/i/c/k/snow.gif":
            return icons.snow;
            case "http://icons.wxug.com/i/c/k/nt_snow.gif":
            return icons.nt_snow;
            default:
            return "CRAP! something's wrong with the feed";

        }
    }
}