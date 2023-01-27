// const parse = (obj, parentSelector = '') => {
//     let css = '';
//     for (const [key, value] of Object.entries(obj)) {
//         if (typeof value === 'object') {
//             css += `${parentSelector}${key} {\n`;
//             css += parse(value, `  `);
//             css += `}\n`;
//         } else {
//             css += `  ${parentSelector}${key}: ${value};\n`;
//         }
        
//         console.log("Compiling...")
//     }
//     return css;
// };


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
        
        console.log("Compiling...")
    }
    return css;
};


module.exports = parse;