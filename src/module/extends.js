const deepAssign = require("../utils/deep-assign");



function processExtends2(obj) {
  let otherKey;
  for (const key in obj) {
    if (obj[key]["@extends"]) {
      const parentKey = obj[key]["@extends"];
      if (!obj[parentKey]) {
        console.log(
          `Error: Parent key "${parentKey}" not found for key "${key}"`
        );
        continue;
      } else if (typeof obj[key][parentKey] !== "object") {
        console.log(
          `Error: Parent key "${parentKey}" is not an object for key "${key}"`
        );
        continue;
      }
      obj[key] = { ...obj[parentKey], ...obj[key] };
      delete obj[key]["@extends"];
    } else if (typeof obj[key] === "object") {
      const parentKey = obj[key]["@extends"];
      processExtends(obj[key]);
    }
  }
  return obj;
}

function processExtends(obj) {
  for (const key in obj) {
    if (obj[key]["@extends"]) {
      const parentKey = obj[key]["@extends"];
      const parentKeys = parentKey.split(" ");
      let parentStyle = obj;

      // traverse the parentKeys to find the correct parent object
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
        parentStyle = parentStyle[parentKeys[i]];
      }

      obj[key] = { ...parentStyle, ...obj[key] };
      deepAssign({}, obj[parentKey], obj[key]);
      delete obj[key]["@extends"];
    } else if (typeof obj[key] === "object") {
      processExtends(obj[key]);
    }
  }
  return obj;
}

module.exports = processExtends;
