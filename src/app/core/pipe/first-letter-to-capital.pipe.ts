import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterToCapital',
  standalone: true
})
export class FirstLetterToCapitalPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    const textLower = value.toLowerCase();
    const textFirstupper = textLower.charAt(0).toUpperCase() + textLower.slice(1);
    console.log({ textFirstupper });
    return textFirstupper

  }

}
