const path = require("node:path");

//get the platform-specific path delimiter
console.log(process.env.PATH.split(path.delimiter));

//get the directory name
console.log(path.dirname("/backend/node/task3/path-task/main.js"));

//get the extension of the path, from the last occurrence of the . (period) character to end of string in the last portion of the path
console.log(path.extname("/backend/node/task3/path-task/main.js"));

//normalizes the given path, resolving '..' and '.' segments.
console.log(
  path.win32.normalize("//backend///node//\\task3/\\path-task/\\main.js")
);
