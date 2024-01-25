import type { CSSDeclaration } from "../utils/types"

interface ShorthandBorder {
  width?: string;
  color?: string;
  style?: string;
  top?: ShorthandBorder;
  right?: ShorthandBorder;
  bottom?: ShorthandBorder;
  left?: ShorthandBorder;
}

function expandShorthandProperties(styles: CSSDeclaration): CSSDeclaration {
  for (const key in styles) {
    if (typeof styles[key] === "object") {
      expandShorthandProperties(styles[key] as CSSDeclaration );

      if (key === "border") {
        const shorthandBorder = styles[key] as ShorthandBorder;

        styles["border-width"] = shorthandBorder.width;
        styles["border-color"] = shorthandBorder.color;
        styles["border-style"] = shorthandBorder.style;

        styles["border-top-width"] = shorthandBorder.top?.width;
        styles["border-top-color"] = shorthandBorder.top?.color;
        styles["border-top-style"] = shorthandBorder.top?.style;

        styles["border-right-width"] = shorthandBorder.right?.width;
        styles["border-right-color"] = shorthandBorder.right?.color;
        styles["border-right-style"] = shorthandBorder.right?.style;

        styles["border-left-width"] = shorthandBorder.left?.width;
        styles["border-left-color"] = shorthandBorder.left?.color;
        styles["border-left-style"] = shorthandBorder.left?.style;

        styles["border-bottom-width"] = shorthandBorder.bottom?.width;
        styles["border-bottom-color"] = shorthandBorder.bottom?.color;
        styles["border-bottom-style"] = shorthandBorder.bottom?.style;

        styles["border-top"] = typeof shorthandBorder.top !== 'object' ? shorthandBorder.top : undefined;
        styles["border-right"] = typeof shorthandBorder.right !== 'object' ? shorthandBorder.right : undefined;
        styles["border-left"] = typeof shorthandBorder.left !== 'object' ? shorthandBorder.left : undefined;
        styles["border-bottom"] = typeof shorthandBorder.bottom !== 'object' ? shorthandBorder.bottom : undefined;

        delete styles[key];
      } else if (key === "background") {
        const background = styles[key] as CSSDeclaration ;

        styles["background-color"] = background.color;
        styles["background-image"] = background.image;
        styles["background-repeat"] = background.repeat;
        styles["background-attachment"] = background.attachment;
        styles["background-position"] = background.position;
        styles["background-size"] = background.size;

        delete styles[key];
      } else if (key === "border-bottom") {
        const borderBottom = styles[key] as ShorthandBorder;

        styles["border-bottom-width"] = borderBottom.width;
        styles["border-bottom-color"] = borderBottom.color;
        styles["border-bottom-style"] = borderBottom.style;

        delete styles[key];
      } else if (key === "border-top") {
        const borderTop = styles[key] as ShorthandBorder;

        styles["border-top-width"] = borderTop.width;
        styles["border-top-color"] = borderTop.color;
        styles["border-top-style"] = borderTop.style;

        delete styles[key];
      } else if (key === "border-left") {
        const borderLeft = styles[key] as ShorthandBorder;

        styles["border-left-width"] = borderLeft.width;
        styles["border-left-color"] = borderLeft.color;
        styles["border-left-style"] = borderLeft.style;

        delete styles[key];
      } else if (key === "border-right") {
        const borderRight = styles[key] as ShorthandBorder;

        styles["border-right-width"] = borderRight.width;
        styles["border-right-color"] = borderRight.color;
        styles["border-right-style"] = borderRight.style;

        delete styles[key];
      } else if (key === "font") {
        const font = styles[key] as CSSDeclaration ;

        styles["font-style"] = font.style;
        styles["font-variant"] = font.variant;
        styles["font-weight"] = font.weight;
        styles["font-size"] = font.size;
        styles["line-height"] = font.lineHeight;
        styles["font-family"] = font.family;

        delete styles[key];
      } else if (key === "margin") {
        const margin = styles[key] as CSSDeclaration ;

        styles["margin-top"] = margin.top;
        styles["margin-right"] = margin.right;
        styles["margin-bottom"] = margin.bottom;
        styles["margin-left"] = margin.left;

        delete styles[key];
      } else if (key === "padding") {
        const padding = styles[key] as CSSDeclaration ;

        styles["padding-top"] = padding.top;
        styles["padding-right"] = padding.right;
        styles["padding-bottom"] = padding.bottom;
        styles["padding-left"] = padding.left;

        delete styles[key];
      } else if (key === "outline") {
        const outline = styles[key] as ShorthandBorder;

        styles["outline-width"] = outline.width;
        styles["outline-color"] = outline.color;
        styles["outline-style"] = outline.style;

        delete styles[key];
      } else if (key === "list-style") {
        const listStyle = styles[key] as CSSDeclaration ;

        styles["list-style-type"] = listStyle.type;
        styles["list-style-position"] = listStyle.position;
        styles["list-style-image"] = listStyle.image;

        delete styles[key];
      } else if (key === "animation") {
        const animation = styles[key] as CSSDeclaration ;

        styles["animation-name"] = animation.name;
        styles["animation-duration"] = animation.duration;
        styles["animation-timing-function"] = animation.timingFunction;
        styles["animation-delay"] = animation.delay;
        styles["animation-iteration-count"] = animation.iterationCount;
        styles["animation-direction"] = animation.direction;
        styles["animation-fill-mode"] = animation.fillMode;
        styles["animation-play-state"] = animation.playState;

        delete styles[key];
      } else if (key === "transition") {
        const transition = styles[key] as CSSDeclaration ;

        styles["transition-property"] = transition.property;
        styles["transition-duration"] = transition.duration;
        styles["transition-timing-function"] = transition.timingFunction;
        styles["transition-delay"] = transition.delay;

        delete styles[key];
      } else if (key === "column") {
        const column = styles[key] as CSSDeclaration ;

        styles["column-width"] = column.width;
        styles["column-count"] = column.count;
        styles["column-gap"] = column.gap;
        styles["column-rule-width"] = column.ruleWidth;
        styles["column-rule-color"] = column.ruleColor;
        styles["column-rule-style"] = column.ruleStyle;

        delete styles[key];
      } else if (key === "grid-template") {
        const gridTemplate = styles[key] as CSSDeclaration ;

        styles["grid-template-rows"] = gridTemplate.rows;
        styles["grid-template-columns"] = gridTemplate.columns;

        delete styles[key];
      } else if (
        key === "grid-template-rows" ||
        key === "grid-template-columns"
      ) {
        styles[key] = (styles[key] as string[]).join(" ");
      } else if (key === "grid-template") {
        const gridTemplate = styles[key] as CSSDeclaration ;

        styles["grid-template-rows"] = gridTemplate.rows;
        styles["grid-template-columns"] = gridTemplate.columns;
        styles["grid-template-areas"] = gridTemplate.areas;

        delete styles[key];
      } else if (key === "border-image") {
        const borderImage = styles[key] as CSSDeclaration ;

        styles["border-image-source"] = borderImage.source;
        styles["border-image-slice"] = borderImage.slice;
        styles["border-image-width"] = borderImage.width;
        styles["border-image-outset"] = borderImage.outset;
        styles["border-image-repeat"] = borderImage.repeat;

        delete styles[key];
      }
    }
  }
  return styles;
}

export default expandShorthandProperties;
