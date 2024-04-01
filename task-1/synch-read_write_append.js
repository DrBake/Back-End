// Reading and writing to a file synchronously
const fs = require("fs");
const path = require("path");

// path name
const pathName = path.join(__dirname, "Files", "data-synch.txt");

// data to write or append
const writeData = "Hi there, my name is Lenox 👋";
const appendData = "\nA back end software developer👨‍💻";

//write function
function fileWriting(pathName, writeData) {
  fs.writeFileSync(pathName, writeData);
  console.log("Data written\n");
}

// append data to file function
function dataAppending(pathName, appendData) {
  fs.appendFileSync(pathName, appendData);
  console.log(". . . data saved\n");
}

// read file function
function fileReading(pathName) {
  console.log("Reading data . . .\n");
  const readData = fs.readFileSync(pathName, "utf-8");
  console.log(readData);
}

// reading, writing, appending and reading data synchronously
fileReading(pathName);
fileWriting(pathName, writeData);
dataAppending(pathName, appendData);
fileReading(pathName);
