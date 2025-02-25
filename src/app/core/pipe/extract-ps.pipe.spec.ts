import { ExtractPSPipe } from './extract-ps.pipe';

describe('ExtractPSPipe', () => {
  it('create an instance', () => {
    const pipe = new ExtractPSPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the PS Type', () => {
    const pipe = new ExtractPSPipe();
    expect(pipe.transform('Ospedale di Cles - Pronto Soccorso')).toBe('homeStatoPS.label.ps');
  });

  it('should return the PS Type', () => {
    const pipe = new ExtractPSPipe();
    expect(pipe.transform('Ospedale di Trento - Pronto Soccorso Pediatrico')).toBe('homeStatoPS.label.ps_pediatric');
  });
});
