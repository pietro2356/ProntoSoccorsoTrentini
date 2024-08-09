export function registerErrorFn<T>(error: T, source: string) {
  if (error instanceof Error) {
    error.cause = source;
    throw error;
  } else {
    throw error;
  }
}
