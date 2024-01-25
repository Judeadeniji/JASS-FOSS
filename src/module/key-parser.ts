interface ObjectWithNestedProperties {
  [key: string]: any | ObjectWithNestedProperties;
}

function camelToKebab(obj: ObjectWithNestedProperties): ObjectWithNestedProperties {
  const newObj: ObjectWithNestedProperties = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      if (typeof obj[key] === 'object') {
        newObj[newKey] = camelToKebab(obj[key] as ObjectWithNestedProperties);
      } else {
        newObj[newKey] = obj[key];
      }
    }
  }
  return newObj;
}

export default camelToKebab;
