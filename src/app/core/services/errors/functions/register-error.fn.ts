export function registerErrorFn<T>(error: T, source: string) {
  if (error instanceof Error) {
    error.cause = source;
    throw error;
  } else if (typeof error === 'string') {
    throw new Error(`${source}: ${error}`, { cause: source });
  } else {
    throw new Error(`${source}: ${error}`, { cause: source });
  }
}
