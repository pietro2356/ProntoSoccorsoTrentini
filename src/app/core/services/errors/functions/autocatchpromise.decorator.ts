import { registerErrorFn } from '@core/services/errors/functions/register-error.fn';

export function autoCatchPromiseFn(target: NonNullable<unknown>, propertyName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: unknown[]) {
    try {
      return await originalMethod.apply(this, args);
    } catch (error) {
      registerErrorFn(error, `${target.constructor.name}::${propertyName}`);
    }
  };

  return descriptor;
}
