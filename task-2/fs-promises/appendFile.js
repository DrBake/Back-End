import fs from "node:fs";

//function to append data to a file
const fileAppending = function (filePath, dataToAppend) {
  return new Promise((resolve, reject) => {
    fs.appendFile(filePath, dataToAppend, (err) => {
      if (err) {
        reject("Error: ", err);
        return;
      }
      resolve(
        "\nappending data. . . \n=== data was successfully appended. ==="
      );
    });
  });
};

export default fileAppending;
