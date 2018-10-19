import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value: any): any {
    let today:any = new Date(); //get current date and time
    // let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference =Math.abs(value-today)// returns value in milliseconds
    const secondsInADay= 86400; //60 seconds*60 minutes in an hour *24 hours

    var dateDifferenceSeconds=dateDifference*0.001; //converts to seconds

    var days = dateDifferenceSeconds/secondsInADay;
    dateDifferenceSeconds -=(days*secondsInADay);
    var hours = dateDifferenceSeconds/(60*24) ;
    dateDifferenceSeconds -=(hours*(60*24));
    var minutes = dateDifferenceSeconds/60 ;
    var seconds = dateDifferenceSeconds-(minutes*60) ;

    var time = "";

    if (days>0) {
      time += (days + "days ");
    }
    if (hours>0) {
      time += (hours + "hours ");
    }
    if (minutes>0) {
      time += (minutes + "minutes ");
    }
    time += (seconds + "seconds ");
    time;
  }

}
