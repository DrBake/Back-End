const fs = require("node:fs/promises");

//fnction to write a file
async function fileWriting(filePathWrite, dataToWrite) {
  console.log("=== writing data ===");
  fs.writeFile(filePathWrite, dataToWrite, (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log("=== data successfully written");
}
module.exports = fileWriting;
