const fs = require("node:fs");
const util = require("node:util");

//promisify a writeFile function
const writeFile = util.promisify(fs.writeFile);

//function to write to a file.
async function fileWriting(filePath, data) {
  console.log("=== writing data ===");
  await writeFile(filePath, data);
  console.log("=== data successfully written");
}
module.exports = fileWriting;
