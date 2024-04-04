import fs from "node:fs";

//function to write data to a file
const fileWriting = function (filePath, dataToWrite) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, dataToWrite, (err) => {
      if (err) {
        reject("Error: ", err);
        return;
      }
      resolve("...writing data...\ndata successfully written.");
    });
  });
};

export default fileWriting;
