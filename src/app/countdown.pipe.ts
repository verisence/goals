import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countdown'
})
export class CountdownPipe implements PipeTransform {

  transform(value: any): number {
    
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate());
    // let todayWithNoTime:any = new Date();
    var dateDifference = Math.abs(value-todayWithNoTime);
    const secondsInADay = 86400;
    var dateDifferenceSeconds = dateDifference*0.001;
    var dateCounter = dateDifferenceSeconds/secondsInADay;
    if (dateCounter >= 1 && value > todayWithNoTime) {
      return dateCounter;
    } else {      
      return 0;  
    }

    // if (dateDifferenceSeconds >= 1 && value > todayWithNoTime) {
    //   return dateDifferenceSeconds;
    // } else {      
    //   return 0;  
    // }

  }  

}
