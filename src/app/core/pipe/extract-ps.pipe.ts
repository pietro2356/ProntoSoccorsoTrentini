import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractPS',
  standalone: true
})
export class ExtractPSPipe implements PipeTransform {

  transform(value: string): unknown {
    const prontoSoccorso = value.split('-')[1];
    console.log({ prontoSoccorso });
    return prontoSoccorso;
  }

}
