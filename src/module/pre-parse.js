function beforeParse(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            beforeParse(obj[key]);
        } else if (obj[key] === undefined || obj[key] === null ) {
            delete obj[key];
        }
    }
    return obj;
}


module.exports = beforeParse;