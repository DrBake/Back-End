const fs = require("node:fs");

//function to read a file
async function fileReading(filePathRead) {
  console.log("=== Reading data ===");
  fs.readFile(filePathRead, "utf-8", (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log("=== data successfully read ===");
}

module.exports = fileReading;
