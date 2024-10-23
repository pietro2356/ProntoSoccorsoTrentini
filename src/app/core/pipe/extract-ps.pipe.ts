import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractPS',
  standalone: true,
})
export class ExtractPSPipe implements PipeTransform {
  transform(value: string): string {
    const psValue = value.split(' - ')[1];
    const psTypeLen = psValue.split(' ');
    if (psTypeLen.length === 2) return 'homeStatoPS.label.ps';

    switch (psTypeLen[2]) {
      case 'Pediatrico':
        return 'homeStatoPS.label.ps_pediatric';
      case 'Ortopedico':
        return 'homeStatoPS.label.ps_orthopedic';
      case 'Ginecologico':
        return 'homeStatoPS.label.ps_ginecologic';
      case 'Oculistico':
        return 'homeStatoPS.label.ps_oculistic';
      default:
        return 'homeStatoPS.label.ps';
    }
  }
}
