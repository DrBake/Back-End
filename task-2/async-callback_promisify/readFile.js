const fs = require("node:fs");
const util = require("node:util");

//promisify readfile function
const readFile = util.promisify(fs.readFile);

//function to read from a file.
async function fileReading(filePath) {
  console.log("=== Reading data ===");
  await readFile(filePath, "utf-8");
  console.log("=== data successfully read ===");
}

module.exports = fileReading;
