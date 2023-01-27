function camelToKebab(obj) {
    const newObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
            if (typeof obj[key] === 'object') {
                newObj[newKey] = camelToKebab(obj[key]);
            } else {
                newObj[newKey] = obj[key];
            }
        }
    }
    return newObj;
}

module.exports = camelToKebab;