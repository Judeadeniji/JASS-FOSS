interface StyleObject {
  [key: string]: StyleValue;
}

type StyleValue = StyleObject | string | number | boolean | null | undefined;

const parse = (obj: StyleObject, parentSelector: string = ''): string => {
  let css = '';
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object') {
      let newSelector = key.replace(/>/g, `${parentSelector} >`);
      newSelector = newSelector.replace(/\+/g, `${parentSelector} +`);
      newSelector = newSelector.replace(/~/g, `${parentSelector} ~`);
      css += `${newSelector} {\n`;
      css += parse(value as StyleObject, `  `);
      css += `}\n`;
    } else {
      css += `  ${parentSelector}${key}: ${typeof value === "number" ? `${value}px` : value};\n`;
    }
  }
  return css;
};

export default parse;
