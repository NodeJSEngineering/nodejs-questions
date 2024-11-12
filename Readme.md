```
 What is Node.js? Where can you use it?
 Node.js is an open-source, cross-platform JavaScript runtime environment and library to run web applications outside the client’s browser. It is used to create server-side web applications.
Node.js is perfect for data-intensive applications as it uses an asynchronous, event-driven model. You can use  I/O intensive web applications like video streaming sites. You can also use it for developing: Real-time web applications, Network applications, General-purpose applications, and Distributed systems.

What are the modules in Node.js?
Modules are like JavaScript libraries that can be used in a Node.js application to include a set of functions. To include a module in a Node.js application, use the require() function with the parentheses containing the module's name.
Core Modules-
HTTP

util
Util module in node.js provides access to various utility functions. There are various utility modules available in the node.js module library.

OS Module: Operating System-based utility modules for node.js are provided by the OS module. 

Path Module: The path module in node.js is used for transforming and handling various file paths. 
functionalities. The actual DNS lookup is also performed by the DNS Module. 

Net Module: Net Module in node.js is used for the creation of both client and server. Similar to DNS Module this module also provides an asynchronous network wrapper.

fs
url
query string
stream

zlib - Includes methods to compress or decompress files

Other important modules-

assert - important tool for writing effective tests in Node.js.

Connect - It can be used to handle different types of middleware, such as error-handling middleware, cookie-parsing middleware, and session middleware. Error-handling middleware is used to handle errors that occur during the request/response cycle. Cookie parsing middleware is used to parse cookies from the request header. Session middleware is used to manage user sessions.

crypto - It is widely used in Node.js applications to generate secure random numbers, create digital signatures, and verify signatures. It also provides support for various encryption algorithms such as AES, DES, and RSA.

Passport is a popular authentication middleware for Node.js. It provides a simple and modular way to implement authentication in Node.js applications. Passport supports many authentication mechanisms, including username/password, social logins like Facebook and Google, and JSON Web Tokens (JWTs).
Authentication is the process of verifying a user’s identity while authorization is determining what actions can be performed. We use packages like Passport and JWT to implement authentication and authorization.

DNS module provides methods for performing DNS lookups. DNS stands for Domain Name System, and it is responsible for translating domain names into IP addresses. The DNS. lookup() method is used to perform a DNS lookup and resolve a domain name into an IP address. It enables us to use the underlying Operating System name resolution.

node-static - module is used to serve static files in Node.js.

Body-parser is the Node.js body-parsing middleware. It is responsible for parsing the incoming request bodies in a middleware before you handle it. It is an NPM module that processes data sent in HTTP requests.

tls module provides an implementation of the Transport Layer Security (TLS) and Secure Socket Layer (SSL) protocols that are built on top of OpenSSL. It helps to establish a secure connection on the network.

Session management can be done in node.js by using the express-session module. It helps in saving the data in the key-value form. In this module, the session data is not saved in the cookie itself, just the session ID.

Multer
package used for file uploading in Node.js is Multer. The file can be uploaded to the server using this module. There are other modules in the market but Multer is very popular when it comes to file uploading. Multer is a node.js middleware that is used for handling multipart/form-data, which is a mostly used library for uploading files.

To handle database connection in Node.js we use the driver for MySQL and libraries like Mongoose for connecting to the MongoDB database. These libraries provide methods to connect to the database and execute queries.

redis module
Redis is an Open Source store for storing data structures. It is used in multiple ways. It is used as a database, cache, and message broker. It can store data structures such as strings, hashes, sets, sorted sets, bitmaps, indexes, and streams. Redis is very useful for Node.js developers as it reduces the cache size which makes the application more efficient. However, it is very easy to integrate Redis with Node.js applications.

What is a first class function in Javascript?
When functions can be treated like any other variable then those functions are first-class functions

What are some commonly used timing features of Node.js?
setTimeout/clearTimeout – This is used to implement delays in code execution.
setInterval/clearInterval – This is used to run a code block multiple times.
setImmediate/clearImmediate – Any function passed as the setImmediate() argument is a callback that's executed in the next iteration of the event loop.
process.nextTick – Both setImmediate and process.nextTick appear to be doing the same thing; however, you may prefer one over the other depending on your callback’s urgency. 

process.nextTick() sets the callback to execute but setImmediate pushes the callback in the queue to be executed. So the event loop runs in the following manner

timers–>pending callbacks–>idle,prepare–>connections(poll,data,etc)–>check–>close callbacks

In this process.nextTick() method adds the callback function to the start of the next event queue and setImmediate() method to place the function in the check phase of the next event queue.



What are the advantages of using promises instead of callbacks?
The main advantage of using promise is you get an object to decide the action that needs to be taken after the async task completes. This gives more manageable code and avoids callback hell.


What is fork in node JS?
A fork in general is used to spawn child processes. In node it is used to create a new instance of v8 engine to run multiple workers to execute the code.

Could we run an external process with Node.js? ☆☆
Answer: Yes. Child process module enables us to access operating system functionaries or other apps. Scalability is baked into Node and child processes are the key factors to scale our application. You can use child process to run system commands, read large files without blocking event loop, decompose the application into various “nodes” (That’s why it’s called Node).

Child process module has following three major ways to create child processes –

spawn - child_process.spawn launches a new process with a given command.
exec - child_process.exec method runs a command in a shell/console and buffers the output.
fork - The child_process.fork method is a special case of the spawn() to create child processes.

How many types of API functions are there in Node.js?
There are two types of API functions:
Asynchronous, non-blocking functions - mostly I/O operations which can be fork out of the main loop.
Synchronous, blocking functions - mostly operations that influence the process running in the main loop.

What is REPL?
PL in Node.js stands for Read, Eval, Print, and Loop, which further means evaluating code on the go.


List down the two arguments that async.queue takes as input?
Task Function
Concurrency Value

What is an event-loop in Node JS?
Whatever that is async is managed by event-loop using a queue and listener. 

So when an async function needs to be executed(or I/O) the main thread sends it to a different thread allowing v8 to keep executing the main code. Event loop involves different phases with specific tasks such as timers, pending callbacks, idle or prepare, poll, check, close callbacks with different FIFO queues. Also in between iterations it checks for async I/O or timers and shuts down cleanly if there aren't any.

The event loop in Node.js is a mechanism that allows it to handle multiple asynchronous tasks concurrently within a single thread. It continuously listens for events and executes associated callback functions.

What is node.js streams?
Streams are instances of EventEmitter which can be used to work with streaming data in Node.js. They can be used for handling and manipulating streaming large files(videos, mp3, etc) over the network. They use buffers as their temporary storage.

There are mainly four types of the stream:

Writable: streams to which data can be written (for example, fs.createWriteStream()).
Readable: streams from which data can be read (for example, fs.createReadStream()).
Duplex: streams that are both Readable and Writable (for example, net.Socket).
Transform: Duplex streams that can modify or transform the data as it is written and read (for example, zlib.createDeflate()).


What are node.js buffers?
In general, buffers is a temporary memory that is mainly used by stream to hold on to some data until consumed. Buffers are introduced with additional use cases than JavaScript’s Unit8Array and are mainly used to represent a fixed-length sequence of bytes. This also supports legacy encodings like ASCII, utf-8, etc. It is a fixed(non-resizable) allocated memory outside the v8.


 What is middleware?
Middleware comes in between your request and business logic. It is mainly used to capture logs and enable rate limit, routing, authentication, basically whatever that is not a part of business logic. There are third-party middleware also such as body-parser and you can write your own middleware for a specific use case.


Explain what a Reactor Pattern in Node.js?
Reactor pattern again a pattern for nonblocking I/O operations. But in general, this is used in any event-driven architecture. 

There are two components in this: 1. Reactor 2. Handler.

Reactor: Its job is to dispatch the I/O event to appropriate handlers
Handler: Its job is to actually work on those events



exit codes of Node.js?
Exit codes give us an idea of how a process got terminated/the reason behind termination. 

A few of them are:

Uncaught fatal exception - (code - 1) - There has been an exception that is not handled
Unused - (code - 2) - This is reserved by bash
Fatal Error - (code - 5) - There has been an error in V8 with stderr output of the description
Internal Exception handler Run-time failure - (code - 7) - There has been an exception when bootstrapping function was called
Internal JavaScript Evaluation Failure - (code - 4) - There has been an exception when the bootstrapping process failed to return function value when evaluated.

How are worker threads different from clusters?
Cluster:
There is one process on each CPU with an IPC to communicate.
In case we want to have multiple servers accepting HTTP requests via a single port, clusters can be helpful.
The processes are spawned in each CPU thus will have separate memory and node instance which further will lead to memory issues.

Worker threads:
There is only one process in total with multiple threads.
Each thread has one Node instance (one event loop, one JS engine) with most of the APIs accessible.
Shares memory with other threads (e.g. SharedArrayBuffer)
This can be used for CPU-intensive tasks like processing data or accessing the file system since NodeJS is single-threaded, synchronous tasks can be made more efficient leveraging the worker's threads.


Callback?
 Callback is an asynchronous equivalent for a function. A callback function is called at the completion of a given task. Node makes heavy use of callbacks. All APIs of Node are written is such a way that they supports callbacks.

For example, a function to read a file may start reading file and return the control to execution environment immediately so that next instruction can be executed. Once file I/O is complete, it will call the callback function while passing the callback function, the content of the file as parameter. So there is no blocking or wait for File I/O.

This makes Node.js highly scalable, as it can process high number of request without waiting for any function to return result.

return callback();
//some more lines of code; -  won't be executed

callback();
//some more lines of code; - will be executed

Of course returning will help the context calling async function get the value returned by callback.

function do2(callback) {
    log.trace('Execute function: do2');
    return callback('do2 callback param');
}

var do2Result = do2((param) => {
    log.trace(`print ${param}`);
    return `return from callback(${param})`; // we could use that return
});

log.trace(`print ${do2Result}`);

how can you avoid callback hells?
To do so you have  options:
modularization: break callbacks into independent functions
use Promises
use yield with Generators and/or Promises


relationship between Node.js and V8?
 V8 is the Javascript engine inside of node.js that parses and runs your Javascript. The same V8 engine is used inside of Chrome to run javascript in the Chrome browser. Google open-sourced the V8 engine and the builders of node.js used it to run Javascript in node.js.


How would you scale Node application?
We can scale Node application in following ways:
cloning using Cluster module.
decomposing the application into smaller services – i.e micro services.

Q16: How does the cluster module work? What’s the difference between it and a load balancer?
The cluster module performs fork from your server (at that moment it is already an OS process), thus creating several slave processes. The cluster module supports two methods of distributing incoming connections.

The first one (and the default one on all platforms except Windows), is the round-robin approach, where the master process listens on a port, accepts new connections and distributes them across the workers in a round-robin fashion, with some built-in smarts to avoid overloading a worker process.

The second approach is where the master process creates the listen socket and sends it to interested workers. The workers then accept incoming connections directly.

The difference between a cluster module and a load balancer is that instead of distributing load between processes, the balancer distributes requests.

Scenario: You are tasked with implementing a feature in a Node.js application that processes and transforms large datasets asynchronously. The data processing needs to be efficient and handle potential errors gracefully.

Question: How would you implement asynchronous data processing in Node.js? What patterns or tools would you use to manage the processing, handle errors, and ensure the application remains responsive.

 What is the purpose of NODE_ENV?
 set and detect which env we are in express server.
 Node encourages the convention of using a variable called NODE_ENV to flag whether we’re in production right now. This determination allows components to provide better diagnostics during development, for example by disabling caching or emitting verbose log statements. Setting NODE_ENV to production makes your application 3 times faster.

// Setting environment variables in bash before starting the node process
$ NODE_ENV=development
$ node

// Reading the environment variable using code
if (process.env.NODE_ENV === “production”)
    useCaching = true;

  Why should you separate the Express app and server?
Firstly, separating your app and server can make it easier to test your code. By separating the two, you can test your app logic independently of the server, which can make it easier to identify and fix bugs.

Secondly, separating your app and server can make it easier to scale your application. By separating the two, you can run multiple instances of your app on different servers, which can help to distribute the load and improve performance.

Finally, separating your app and server can make it easier to switch to a different server if necessary. By keeping your app logic separate from your server logic, you can switch to a different server without having to make any major changes to your code.

The server is responsible for initializing the routes, middleware, and other application logic whereas the app has all the business logic which will be served by the routes initiated by the server. This ensures that the business logic is encapsulated and decoupled from the application logic which makes the project more readable and maintainable

What are global objects in Node.js?
Global objects in Node.js are objects that are available in all modules without the need for an explicit require statement. Some of the most commonly used global objects in Node.js include process, console, and buffer.

How to measure the performance of async operations?
There are several tools and techniques you can use to measure performance, including using the built-in --prof flag, using the perf tool, and using third-party libraries like benchmark.js.

What is meant by tracing in Node.js?
Tracing is a technique used in Node.js to profile the performance of an application. It involves recording the function calls and events that occur during the execution of the application and analyzing the data to identify performance bottlenecks. 

How to get information about a file in Node.js?
In Node.js, the fs module provides methods for working with the file system. To get information about a file, you can use the fs. stat() method. The fs. stat() method returns an object that contains information about the file, such as the file size, creation date, and modified date.

What is the purpose of module.exports?
This is used to expose functions of a particular module or file to be used elsewhere in the project. This can be used to encapsulate all similar functions in a file which further improves the project structure.

For example, you have a file for all utils functions with util to get solutions in a different programming language of a problem statement.

const getSolutionInJavaScript = async ({
 problem_id
}) => {
...
};
const getSolutionInPython = async ({
 problem_id
}) => {
...
};
module.exports = { getSolutionInJavaScript, getSolutionInPython }
Thus using module.exports we can use these functions in some other file:

const { getSolutionInJavaScript, getSolutionInPython} = require("./utils")


 How to check equality of two nodes?
 with isequalnode method

 
How many Node object methods are available?
18

How to read command line arguments in Node.js?
Command-line arguments (CLI) are strings of text used to pass additional information to a program when an application is running through the command line interface of an operating system. We can easily read these arguments by the global object in node i.e. process object. Below is the approach:

Step 1: Save a file as index.js and paste the below code inside the file.


let arguments = process.argv ; 
  
console.log(arguments) ;
Step 2: Run the index.js file using the below command:

node index.js 

How to handle environment variables in Node.js?
We use process.env to handle environment variables in Node.js. We can specify environment configurations as well as keys in the .env file. To access the variable in the application, we use the “process.env.VARIABLE_NAME” syntax. To use it we have to install the dotenv package using the below command:

npm install dotenv

What is tracing in Node.js?
The Tracing Objects are used for a set of categories to enable and disable the tracing. When tracing events are created then tracing objects is disabled by calling tracing.enable() method and then categories are added to the set of enabled trace and can be accessed by calling tracing.categories.

How you can monitor a file for modifications in Node.js ? ☆☆
Answer: We can take advantage of File System watch() function which watches the changes of the file.

What is V8? ☆☆
Answer: The V8 library provides Node.js with a JavaScript engine (a program that converts Javascript code into lower level or machine code that microprocessors can understand), which Node.js controls via the V8 C++ API. V8 is maintained by Google, for use in Chrome.

The Chrome V8 engine :

The V8 engine is written in C++ and used in Chrome and Nodejs.
It implements ECMAScript as specified in ECMA-262.
The V8 engine can run standalone we can embed it with our own C++ program.

What is the preferred method of resolving unhandled exceptions in Node.js? ☆☆☆
Answer: Unhandled exceptions in Node.js can be caught at the Process level by attaching a handler for uncaughtException event.

process.on('uncaughtException', function(err) {
  console.log('Caught exception: ' + err);
});

Name some of the events fired by streams. ☆☆☆☆
Answer: Each type of Stream is an EventEmitter instance and throws several events at different instance of times. For example, some of the commonly used events are:

data - This event is fired when there is data is available to read.
end - This event is fired when there is no more data to read.
error - This event is fired when there is any error receiving or writing data.
finish - This event is fired when all data has been flushed to underlying system

What is the purpose of __filename variable? ☆☆☆☆
Answer: The __filename represents the filename of the code being executed. This is the resolved absolute path of this code file. For a main program this is not necessarily the same filename used in the command line. The value inside a module is the path to that module file.

How can you listen on port 80 with Node? ☆☆☆☆
Answer: Run the application on any port above 1024, then put a reverse proxy like nginx in front of it.

How do you debug Node.js applications? ☆☆☆
Answer: Node has its own built in GUI debugger as of version 6.3 (using Chrome's DevTools).

node --inspect server.js


What's the difference between dependencies, devDependencies and peerDependencies in npm package.json file? ☆☆☆☆
Answer:

dependencies - Dependencies that your project needs to run, like a library that provides functions that you call from your code. They are installed transitively (if A depends on B depends on C, npm install on A will install B and C).

devDependencies - Dependencies you only need during development or releasing, like compilers that take your code and compile it into javascript, test frameworks or documentation generators. They are not installed transitively (if A depends on B dev-depends on C, npm install on A will install B only).

peerDependencies - Dependencies that your project hooks into, or modifies, in the parent project, usually a plugin for some other library or tool. It is just intended to be a check, making sure that the parent project (project that will depend on your project) has a dependency on the project you hook into. So if you make a plugin C that adds functionality to library B, then someone making a project A will need to have a dependency on B if they have a dependency on C. They are not installed (unless npm < 3), they are only checked for.

 How to solve "Process out of Memory Exception" in Node.js ? ☆☆☆☆☆
Answer: To solve the process out of memory exception in Node.js we need to increase the max-old-space-size. By default the max size of max-old-space-size is 512 mb which you can increase by the command:

node --max-old-space-size=1024 file.js
```
