import { FirstLetterToCapitalPipe } from './first-letter-to-capital.pipe';

describe('FirstLetterToCapitalPipe', () => {
  it('create an instance', () => {
    const pipe = new FirstLetterToCapitalPipe();
    expect(pipe).toBeTruthy();
  });
});
