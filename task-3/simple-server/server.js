const http = require("node:http");
const path = require("node:path");
const fs = require("node:fs");

const PORT = process.env.PORT || 3000;

const readPath = path.resolve(__dirname, "files", "read.txt");
const deletePath = path.resolve(__dirname, "files", "delete.txt");
const putPath = path.resolve(__dirname, "files", "put.txt");
const homePath = path.resolve(__dirname, "files", "home.txt");
const postPath = path.resolve(__dirname, "files", "post.txt");

const message = "I am Lenox, a back end software developer";
const appendMessage =
  "\n*****************\nupdated data\n**********************";

//create server
const server = http.createServer((req, res) => {
  //read data from files
  if (req.url === "/") {
    fs.readFile(homePath, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      }
      res.end(data);
    });
  } else if (req.url === "/post") {
    //create || post data to a file
    fs.writeFile(postPath, message, (err) => {
      if (err) {
        console.log(err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      }
      res.write(`data successfully posted to: \n${postPath}`);
      res.end();
    });
  } else if (req.url === "/get") {
    //read || get data from file
    fs.readFile(readPath, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      }

      res.end(data);
    });
  } else if (req.url === "/put") {
    //update || put data
    fs.appendFile(putPath, appendMessage, (err) => {
      if (err) {
        console.log(err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      }
      res.write(`data successfully updated to: \n${putPath}`);
      res.end();
    });
  } else if (req.url === "/delete") {
    //delete file
    fs.unlink(deletePath, (err) => {
      if (err) {
        console.log(err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      }
      res.write(`${deletePath} was deleted`);
      res.end();
    });
  } else {
    res.write("wrong path buddy");
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
