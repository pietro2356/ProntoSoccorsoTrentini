import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractPS',
  standalone: true
})
export class ExtractPSPipe implements PipeTransform {

  transform(value: string): unknown {
    return value.split('-')[1];
  }

}
