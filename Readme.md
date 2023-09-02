```
1. What is a first class function in Javascript?
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

If Node.js is single threaded then how does it handle concurrency?
The main loop is single-threaded and all async calls are managed by libuv library.

The Thread pool is handled by the libuv library. libuv is a multi-platform C library that provides support for asynchronous I/O-based operations such as file systems, networking, and concurrency. 

For example:

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
This gives the output:

Hash: 1213
Hash: 1225
Hash: 1212
Hash: 1222
This is because libuv sets up a thread pool to handle such concurrency. How many threads will be there in the thread pool depends upon the number of cores but you can override this.



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


Event Emitter in Node.js?
EventEmitter is a Node.js class that includes all the objects that are basically capable of emitting events. This can be done by attaching named events that are emitted by the object using an eventEmitter.on() function. Thus whenever this object throws an even the attached functions are invoked synchronously.

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
 console.log('an event occurred!');
});
myEmitter.emit('event');





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


Callback? ☆☆☆
 Callback is an asynchronous equivalent for a function. A callback function is called at the completion of a given task. Node makes heavy use of callbacks. All APIs of Node are written is such a way that they supports callbacks.

For example, a function to read a file may start reading file and return the control to execution environment immediately so that next instruction can be executed. Once file I/O is complete, it will call the callback function while passing the callback function, the content of the file as parameter. So there is no blocking or wait for File I/O.

This makes Node.js highly scalable, as it can process high number of request without waiting for any function to return result.

how can you avoid callback hells? ☆☆☆
Answer: To do so you have more options:

modularization: break callbacks into independent functions
use Promises
use yield with Generators and/or Promises


relationship between Node.js and V8? ☆☆☆
Answer: V8 is the Javascript engine inside of node.js that parses and runs your Javascript. The same V8 engine is used inside of Chrome to run javascript in the Chrome browser. Google open-sourced the V8 engine and the builders of node.js used it to run Javascript in node.js.



How do you convert an existing callback API to promises? ☆☆☆☆
Details: How to convert this callback code to Promise? Provide some examples.

function divisionAPI (number, divider, successCallback, errorCallback) {
    if (divider == 0) {
        return errorCallback( new Error("Division by zero") )
    }
    successCallback( number / divider )
}
Answer:

function divisionAPI(number, divider) {
    return new Promise(function(fulfilled, rejected) {
        if (divider == 0) {
            return rejected(new Error("Division by zero"))
        }
        fulfilled(number / divider)
    })
}

// Promise can be used with together async\await in ES7 to make the program flow wait for a fullfiled result
async function foo() {
    var result = await divisionAPI(1, 2); // awaits for a fulfilled result!
    console.log(result);
}

// Another usage with the same code by using .then() method
divisionAPI(1, 2).then(function(result) {
    console.log(result)
})





How would you scale Node application? ☆☆☆☆☆
Answer: We can scale Node application in following ways:

cloning using Cluster module.
decomposing the application into smaller services – i.e micro services.





Q16: How does the cluster module work? What’s the difference between it and a load balancer? ☆☆☆☆
Answer: The cluster module performs fork from your server (at that moment it is already an OS process), thus creating several slave processes. The cluster module supports two methods of distributing incoming connections.

The first one (and the default one on all platforms except Windows), is the round-robin approach, where the master process listens on a port, accepts new connections and distributes them across the workers in a round-robin fashion, with some built-in smarts to avoid overloading a worker process.

The second approach is where the master process creates the listen socket and sends it to interested workers. The workers then accept incoming connections directly.

The difference between a cluster module and a load balancer is that instead of distributing load between processes, the balancer distributes requests.

```
