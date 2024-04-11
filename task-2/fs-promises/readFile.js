const fsPromises = require("node:fs/promises");

//function to read a file
async function fileReading(filePathRead) {
  console.log("=== Reading data ===");
  await fsPromises.readFile(filePathRead, "utf-8");
  console.log("=== data successfully read ===");
}

module.exports = fileReading;
