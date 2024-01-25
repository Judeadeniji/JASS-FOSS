import deepAssign from "../utils/deep-assign";
import type { CSSDeclaration } from "../utils/types"

function processExtends(obj: CSSDeclaration): CSSDeclaration  {
  for (const key in obj) {
    const value = obj[key]
    if (value && value["@extends"]) {
      const parentKey = value["@extends"];
      const parentKeys = parentKey.split(" ");
      let parentStyle: CSSDeclaration  = obj;

      for (let i = 0; i < parentKeys.length; i++) {
        if (!parentStyle[parentKeys[i]]) {
          console.log(
            `Error: Parent key "${parentKeys[i]}" not found for key "${key}"`
          );
          continue;
        } else if (typeof parentStyle[parentKeys[i]] !== "object") {
          console.log(
            `Error: Parent key "${parentKeys[i]}" is not an object for key "${key}"`
          );
          continue;
        }
        parentStyle = parentStyle[parentKeys[i]] as CSSDeclaration ;
      }

      obj[key] = { ...parentStyle, ...(obj[key] as CSSDeclaration ) };
      deepAssign({}, obj[parentKey] as any, obj[key]);
      delete obj[key]?.["@extends"];
    } else if (typeof obj[key] === "object") {
      processExtends(obj[key] as CSSDeclaration );
    }
  }
  return obj;
}

export default processExtends;
