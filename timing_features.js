function cb(){
    console.log('Processed in next iteration');
  }
  process.nextTick(cb);
  console.log('Processed in the first iteration');

  var EventEmitter = require('events');

var crazy = new EventEmitter();

crazy.on('event1', function () {
    console.log('event1 fired!');
    setImmediate(function () {
        crazy.emit('event2');
    });
});

crazy.on('event2', function () {
    console.log('event2 fired!');
    setImmediate(function () {
        crazy.emit('event3');
    });

});

crazy.on('event3', function () {
    console.log('event3 fired!');
    setImmediate(function () {
        crazy.emit('event1');
    });
});

crazy.emit('event1');
// Answer: Shortly - the app will be run infinitely. Any function passed as the setImmediate() argument is a callback that's executed in the next iteration of the event loop. Without setImmidiate all callbacks are executed in a synchronous manner. With setImmidiate each call back executed as a part of next event loop iteration so no recursion/stuck occurs.