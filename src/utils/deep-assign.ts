type ValueTypes = Record<string, any>;

function deepAssign<T extends ValueTypes>(target: T, ...sources: T[]): T {
  for (const source of sources) {
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        if (source[key] !== undefined && source[key] !== null && typeof source[key] === 'object') {
          target[key] = deepAssign(target[key] || {} as any, source[key]);
        } else {
          target[key] = source[key];
        }
      }
    }
  }
  return target;
}

export default deepAssign;
