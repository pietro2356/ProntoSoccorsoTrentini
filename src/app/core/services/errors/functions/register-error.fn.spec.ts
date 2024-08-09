import { registerErrorFn } from '@core/services/errors/functions/register-error.fn';

describe('RegisterErrorFunction', () => {
  let registerError: typeof registerErrorFn;

  beforeEach(() => {
    registerError = registerErrorFn;
  });

  it('should be created', () => {
    expect(registerError).toBeTruthy();
  });

  it('should throw an error', () => {
    expect(() => registerError(new Error('Error'), 'source')).toThrowError('Error');
  });

  it('should throw an error with source', () => {
    try {
      registerError(new Error('Error'), 'source');
    } catch (error: unknown) {
      if (error instanceof Error) {
        expect(error.cause).toBe('source');
      } else {
        fail('Error is not an instance of Error');
      }
    }
  });
});
