const fsPromises = require("node:fs/promises");

//fnction to write a file
async function fileWriting(filePathWrite, dataToWrite) {
  console.log("=== writing data ===");
  await fsPromises.writeFile(filePathWrite, dataToWrite);
  console.log("=== data successfully written");
}
module.exports = fileWriting;
