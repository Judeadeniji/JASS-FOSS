
const parse = (obj, parentSelector = '') => {
    let css = '';
    for (const [key, value] of Object.entries(obj)) {
        if (typeof value === 'object') {
          let  newSelector = key.replace(/>/g, `${parentSelector} >`);
            newSelector = newSelector.replace(/\+/g, `${parentSelector} +`);
            newSelector = newSelector.replace(/~/g, `${parentSelector} ~`);
            css += `${newSelector} {\n`;
            css += parse(value, `  `);
            css += `}\n`;
        } else {
            css += `  ${parentSelector}${key}: ${value};\n`;
        }
    }
    return css;
};


module.exports = parse;