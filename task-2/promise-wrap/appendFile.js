const fs = require("node:fs");

//function to append data to a file
const fileAppending = function (filePathAppend, dataToAppend) {
  return new Promise((resolve, reject) => {
    fs.appendFile(filePathAppend, dataToAppend, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(
        "\nappending data. . . \n=== data was successfully appended. ==="
      );
    });
  });
};

module.exports = fileAppending;
