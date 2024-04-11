const fs = require("node:fs");
const util = require("node:util");

//promisify appendFile function
const appendFile = util.promisify(fs.appendFile);

//function to append data to a file.
async function fileAppending(filePath, data) {
  console.log("=== appending data ===\n");
  await appendFile(filePath, data);
  console.log("=== data is successfully appended ===");
}
module.exports = fileAppending;
