const { compileToProps } = require("../../dist");

const styles = {
  red: {
    color: "red"
  },
  "font-sans": {
    fontFamily: "sans-serif"
  }
};

console.log(compileToProps(styles));