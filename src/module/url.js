const path = require("path");
const fs = require("fs");
const mime = require("mime");

const processUrls = (obj) => {
  for (const key in obj) {
    if (obj[key].hasOwnProperty("url")) {
      let url = obj[key].url;
      // Check if the URL is a relative or absolute path
      if (!url.startsWith("http")) {
        // If it's a relative path, join it with the current working directory to get the full file path
      url = path.join(process.cwd(), url);
      }
      // Check if the file exist
      if (fs.existsSync(url)) {
        // If the file exist read it's content and encode it to base64
        const data = fs.readFileSync(url);
        obj[key] = `url("data:${mime.getType(url)};base64,${data.toString(
          "base64"
        )}")`;
      } else {
        obj[key] = `url(${url})`;
      }
    } else if (typeof obj[key] === "object") {
      console.log("processing URLs")
      processUrls(obj[key]);
    }
  }
  return obj;
};

module.exports = processUrls;
