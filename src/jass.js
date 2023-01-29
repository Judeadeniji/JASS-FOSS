const fs = require("fs");
const postcss = require("postcss");
const postcssNested = require("postcss-nested");
const keyParser = require("./module/key-parser");
const applyExtends = require("./module/extends");
const preParse = require("./module/pre-parse");
const parse = require("./module/parse");
const url = require("./module/url");
const applyShorthand = require("./module/shorthand");

const Jass = () => {
  const compile = (obj) => {
    const object = require(obj);
    
    let css = keyParser(object);

    try {
      css = url(css);
      css = applyExtends(css);
      css = applyShorthand(css);
      css = preParse(css);
      css = parse(css);

    } catch (e) {
      console.error(e);
      return 'error';
    }
    return css;
  };

  const createCss = (objPath, output) => {
    try {
        const css = compile(objPath);

        postcss([postcssNested, require("autoprefixer")])
          .process(css, { from: undefined })
          .then((result) => {
            fs.writeFileSync(output, result.css);
            if (result.map) {
              fs.writeFileSync(output + ".map", result.map.toString());
            }
          });
        return "success";
    } catch (error) {
        console.log(error);
        return "error";
    }
};


  return {
    compile,
    createCss
  };
};

module.exports = Jass();
