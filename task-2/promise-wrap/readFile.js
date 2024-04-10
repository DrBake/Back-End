const fs = require("node:fs");

//read file function.
const fileReading = function (filePathRead) {
  console.log("Reading file . . .\n");
  return new Promise((resolve, reject) => {
    fs.readFile(filePathRead, "utf-8", (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};
module.exports = fileReading;
