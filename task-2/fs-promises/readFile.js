import fs from "node:fs";

//read file function.
const fileReading = function (filePath) {
  console.log("Reading file . . .\n");
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        reject("Error: " + err);
        return;
      }
      resolve(data);
    });
  });
};
export default fileReading;
