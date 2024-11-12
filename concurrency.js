// If Node.js is single threaded then how does it handle concurrency?
// The main loop is single-threaded and all async calls are managed by libuv library.

// The Thread pool is handled by the libuv library. libuv is a multi-platform C library that provides support for asynchronous I/O-based operations such as file systems, networking, and concurrency. 

const crypto = require("crypto");
const start = Date.now();
function logHashTime() {
 crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
console.log("Hash: ", Date.now() - start);
 });
}
logHashTime();
logHashTime();
logHashTime();
logHashTime();
// This gives the output:

// Hash: 1213
// Hash: 1225
// Hash: 1212
// Hash: 1222
// This is because libuv sets up a thread pool to handle such concurrency. How many threads will be there in the thread pool depends upon the number of cores but you can override this.