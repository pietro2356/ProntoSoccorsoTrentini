import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterToCapital',
  standalone: true,
})
export class FirstLetterToCapitalPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    const textLower = value.toLowerCase();
    return textLower.charAt(0).toUpperCase() + textLower.slice(1);
  }
}
