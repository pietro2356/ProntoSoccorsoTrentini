import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToTime',
  standalone: true,
})
export class MinutesToTimePipe implements PipeTransform {
  transform(minutes: number): string {
    if (minutes === undefined || minutes === null) {
      return '? min';
    }
    if (minutes === 0) return '0min';

    const hours = Math.floor(minutes / 60);
    const minutesRemaining = minutes % 60;

    let formattedTime = '';
    if (hours > 0) {
      formattedTime += hours + 'h ';
    }
    if (minutesRemaining > 0) {
      formattedTime += minutesRemaining + 'min';
    }

    return formattedTime;
  }
}
