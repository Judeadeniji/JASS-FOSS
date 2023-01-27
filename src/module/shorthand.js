function expandShorthandProperties(styles) {
  for (const key in styles) {
    if (typeof styles[key] === "object") {
      expandShorthandProperties(styles[key]);
      if (key === "border") {
        styles["border-width"] = styles[key].width;
        styles["border-color"] = styles[key].color;
        styles["border-style"] = styles[key].style;
        delete styles[key];
      } else if (key === "background") {
        styles["background-color"] = styles[key].color;
        styles['background-image'] = styles[key].image;
        styles["background-repeat"] = styles[key].repeat;
        styles["background-attachment"] = styles[key].attachment;
        styles["background-position"] = styles[key].position;
        delete styles[key];
      } else if (key === "border-bottom") {
        styles["border-bottom-width"] = styles[key].width;
        styles["border-bottom-color"] = styles[key].color;
        styles["border-bottom-style"] = styles[key].style;
        delete styles[key];
      } else if (key === "border-top") {
        styles["border-top-width"] = styles[key].width;
        styles["border-top-color"] = styles[key].color;
        styles["border-top-style"] = styles[key].style;
        delete styles[key];
      } else if (key === "border-left") {
        styles["border-left-width"] = styles[key].width;
        styles["border-left-color"] = styles[key].color;
        styles["border-left-style"] = styles[key].style;
        delete styles[key];
      } else if (key === "border-right") {
        styles["border-right-width"] = styles[key].width;
        styles["border-right-color"] = styles[key].color;
        styles["border-right-style"] = styles[key].style;
        delete styles[key];
      } else if (key === "font") {
        styles["font-style"] = styles[key].style;
        styles["font-variant"] = styles[key].variant;
        styles["font-weight"] = styles[key].weight;
        styles["font-size"] = styles[key].size;
        styles["line-height"] = styles[key].lineHeight;
        styles["font-family"] = styles[key].family;
        delete styles[key];
      } else if (key === "margin") {
        styles["margin-top"] = styles[key].top;
        styles["margin-right"] = styles[key].right;
        styles["margin-bottom"] = styles[key].bottom;
        styles["margin-left"] = styles[key].left;
        delete styles[key];
      } else if (key === "padding") {
        styles["padding-top"] = styles[key].top;
        styles["padding-right"] = styles[key].right;
        styles["padding-bottom"] = styles[key].bottom;
        styles["padding-left"] = styles[key].left;
        delete styles[key];
      } else if (key === "outline") {
        styles["outline-width"] = styles[key].width;
        styles["outline-color"] = styles[key].color;
        styles["outline-style"] = styles[key].style;
        delete styles[key];
      } else if (key === "list-style") {
        styles["list-style-type"] = styles[key].type;
        styles["list-style-position"] = styles[key].position;
        styles["list-style-image"] = styles[key].image;
        delete styles[key];
      } else if (key === "animation") {
        styles["animation-name"] = styles[key].name;
        styles["animation-duration"] = styles[key].duration;
        styles["animation-timing-function"] = styles[key].timingFunction;
        styles["animation-delay"] = styles[key].delay;
        styles["animation-iteration-count"] = styles[key].iterationCount;
        styles["animation-direction"] = styles[key].direction;
        styles["animation-fill-mode"] = styles[key].fillMode;
        styles["animation-play-state"] = styles[key].playState;
        delete styles[key];
      } else if (key === "transition") {
        styles["transition-property"] = styles[key].property;
        styles["transition-duration"] = styles[key].duration;
        styles["transition-timing-function"] = styles[key].timingFunction;
        styles["transition-delay"] = styles[key].delay;
        delete styles[key];
      } else if (key === "column") {
        styles["column-width"] = styles[key].width;
        styles["column-count"] = styles[key].count;
        styles["column-gap"] = styles[key].gap;
        styles["column-rule-width"] = styles[key].ruleWidth;
        styles["column-rule-color"] = styles[key].ruleColor;
        styles["column-rule-style"] = styles[key].ruleStyle;
        delete styles[key];
      } else if (key === "grid-template") {
        styles["grid-template-rows"] = styles[key].rows;
        styles["grid-template-columns"] = styles[key].columns;
        delete styles[key];
      } else if (
        key === "grid-template-rows" ||
        key === "grid-template-columns"
      ) {
        styles[key] = styles[key].join(" ");
      } else if (key === "grid-template") {
        styles["grid-template-rows"] = styles[key].rows;
        styles["grid-template-columns"] = styles[key].columns;
        styles["grid-template-areas"] = styles[key].areas;
        delete styles[key];
      } else if (key === "border-image") {
        styles["border-image-source"] = styles[key].source;
        styles["border-image-slice"] = styles[key].slice;
        styles["border-image-width"] = styles[key].width;
        styles["border-image-outset"] = styles[key].outset;
        styles["border-image-repeat"] = styles[key].repeat;
        delete styles[key];
      }
    }
  }
  return styles;
}

module.exports = expandShorthandProperties;
