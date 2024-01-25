import * as path from "path";
import * as fs from "fs";
import * as mime from "mime";
import type { CSSDeclaration, UrlObject } from "../utils/types"

const processUrls = (obj: CSSDeclaration): CSSDeclaration => {
  for (const key in obj) {
    if (obj[key] && typeof obj[key] === "object" && obj[key]?.hasOwnProperty("url")) {
      let url = (obj[key] as UrlObject).url;

      if (!url.startsWith("http")) {
        url = path.join(process.cwd(), url);
      }

      if (fs.existsSync(url)) {
        const data = fs.readFileSync(url);
        obj[key] = `url("data:${mime.getType(url)};base64,${data.toString("base64")}")`;
      } else {
        obj[key] = `url(${url})`;
      }
    } else if (typeof obj[key] === "object") {
      processUrls(obj[key] as CSSDeclaration );
    }
  }
  return obj;
};

export default processUrls;
