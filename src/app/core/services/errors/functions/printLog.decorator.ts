import { environment } from '@env/environment';

export function printLog(target: NonNullable<unknown>, propertyName: string, descriptor: PropertyDescriptor) {
  // Save a reference to the original method
  const originalMethod = descriptor.value;

  if (environment.production) {
    return descriptor;
  }

  // Replace the original method with a new one
  descriptor.value = function (...args: unknown[]) {
    /**
     * Print a log before calling the original method
     * propertyName: the name of the method
     * args: the value of arguments passed to the method
     */

    // console.log(`Calling ${propertyName} with arguments: ${args.join(', ')}`);
    const result = originalMethod.apply(this, args);
    console.info(`Result of ${target.constructor.name}::${propertyName}`, result);
    return result;
  };

  return descriptor;
}
