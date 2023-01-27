function deepAssign(target, ...sources) {
  for (const source of sources) {
    for (const key in source) {
      if (source[key] !== undefined && source[key] !== null && typeof source[key] === 'object') {
        target[key] = deepAssign(target[key] || {}, source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}


module.exports = deepAssign;