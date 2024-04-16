const fs = require("node:fs");

//function to append data to a file
async function appendFile(filePathAppend, dataToAppend) {
  console.log("=== appending data ===\n...  ... ...");
  fs.appendFile(filePathAppend, dataToAppend, (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log("=== data is successfully appended ===");
}

module.exports = appendFile;
