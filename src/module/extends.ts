import deepAssign from "../utils/deep-assign";

interface StyleObject {
  [key: string]: StyleValue;
}

type StyleValue = StyleObject | string | number | boolean | null | undefined;

function processExtends(obj: StyleObject): StyleObject {
  for (const key in obj) {
    const value = obj[key]
    if (value && value["@extends"]) {
      const parentKey = value["@extends"];
      const parentKeys = parentKey.split(" ");
      let parentStyle: StyleObject = obj;

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
        parentStyle = parentStyle[parentKeys[i]] as StyleObject;
      }

      obj[key] = { ...parentStyle, ...(obj[key] as StyleObject) };
      deepAssign({}, obj[parentKey] as any, obj[key]);
      delete obj[key]?.["@extends"];
    } else if (typeof obj[key] === "object") {
      processExtends(obj[key] as StyleObject);
    }
  }
  return obj;
}

export default processExtends;
