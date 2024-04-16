//get os-related utility methods and properties
const os = require("node:os");

//host name of the os
const hostName = os.hostname();
console.log(`Host name: ${hostName}`);

//total memory
const totalMem = os.totalmem();
console.log(`total memory: ${totalMem} bytes`);

//free memory
const freeMem = os.freemem();
console.log(`free memory: ${freeMem} bytes`);

//system uptime in seconds
const upTime = os.uptime();
console.log(`uptime: ${upTime} seconds`);

//os version
const version = os.version();
console.log(`os version: ${version}`);
