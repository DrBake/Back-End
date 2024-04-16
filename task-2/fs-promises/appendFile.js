const fsPromises = require("node:fs/promises");

//function to append data to a file using fs promises
async function appendFile(filePathAppend, dataToAppend) {
  console.log("=== appending data ===\n...  ... ...");
  await fsPromises.appendFile(filePathAppend, dataToAppend);
  console.log("=== data is successfully appended ===");
}

module.exports = appendFile;
