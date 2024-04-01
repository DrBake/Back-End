// Reading and writing to a file asynchronously
const fs = require("node:fs");
const path = require("node:path");

// path name
const pathName = path.join(__dirname, "Files", "data-asynch.txt");

// data to be written and appended
const message = "Hi there, my name is Lenox 👋 \nA back-end software developer";
const messageAppend = ", proficient in node.js";

// read file function
function readingFile(pathName) {
  fs.readFile(pathName, "utf-8", (err, data) => {
    if (err) {
      console.log("Error: ", err);
      return;
    }
    console.log(data);
  });
}

function writingFile(pathName, message) {
  fs.writeFile(pathName, message, (err) => {
    if (err) {
      console.log("Error: ", err);
      return;
    }
    console.log("Data written.");
  });
}

function appendingData(pathName, messageAppend) {
  fs.appendFile(pathName, messageAppend, (err) => {
    if (err) {
      console.log("Error: ", err);
      return;
    }
    console.log("\nappending a message ... ... message successfully appended");
  });
}
