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
  this.createCss = (objPath, output) => {
    var start = performance.now();
    const obj = require(objPath);
    console.log("Jass Compiler Started ...");
    let css = keyParser(obj);
        css = url(css);
        css = applyExtends(css);
        css = applyShorthand(css);
        css = preParse(css);
        css = parse(css);

    postcss([postcssNested, require("autoprefixer")])
      .process(css, { from: undefined })
      .then((result) => {
        fs.writeFileSync(output, result.css);
        if ( result.map ) {
        fs.writeFile(output+'.map', result.map.toString(), () => true)
      }
        var end = performance.now();
        console.log(`Compiled in ${(end - start) / 1000}s \n`);
        console.log(`Done... Saved to ${output}`);
      });
  };
};

module.export = Jass();
