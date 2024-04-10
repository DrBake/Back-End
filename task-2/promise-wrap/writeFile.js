const fs = require("node:fs");

//function to write data to a file
const fileWriting = function (filePathWrite, dataToWrite) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePathWrite, dataToWrite, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve("\n...writing data...\n=== data successfully written. ===");
    });
  });
};

module.exports = fileWriting;
