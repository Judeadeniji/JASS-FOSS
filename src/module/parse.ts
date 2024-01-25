import type { CSSDeclaration } from "../utils/types"

const parse = (obj: CSSDeclaration, parentSelector: string = ''): string => {
  let css = '';
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object') {
      let newSelector = key.replace(/>/g, `${parentSelector} >`);
      newSelector = newSelector.replace(/\+/g, `${parentSelector} +`);
      newSelector = newSelector.replace(/~/g, `${parentSelector} ~`);
      css += `${newSelector} {\n`;
      css += parse(value as CSSDeclaration , `  `);
      css += `}\n`;
    } else {
      css += `  ${parentSelector}${key}: ${typeof value === "number" ? `${value}px` : value};\n`;
    }
  }
  return css;
};

export default parse;
