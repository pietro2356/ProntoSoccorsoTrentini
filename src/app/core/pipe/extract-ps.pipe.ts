import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractPS',
  standalone: true,
})
export class ExtractPSPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return 'homeStatoPS.label.ps';

    if (value.includes('Pediatrico')) return 'homeStatoPS.label.ps_pediatric';
    if (value.includes('Chirurgico-Traumatologico')) return 'homeStatoPS.label.ps_orthopedic';
    if (value.includes('Ginecologico')) return 'homeStatoPS.label.ps_ginecologic';
    if (value.includes('Oculistico')) return 'homeStatoPS.label.ps_oculistic';

    return 'homeStatoPS.label.ps';
  }
}
