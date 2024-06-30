import { FirstLetterToCapitalPipe } from './first-letter-to-capital.pipe';

describe('FirstLetterToCapitalPipe', () => {
  it('create an instance', () => {
    const pipe = new FirstLetterToCapitalPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the first letter to capital', () => {
    const pipe = new FirstLetterToCapitalPipe();
    expect(pipe.transform('TRENTO')).toBe('Trento');
  });

  it('should return the first letter to capital', () => {
    const pipe = new FirstLetterToCapitalPipe();
    expect(pipe.transform('ARCO')).toBe('Arco');
  });
});
