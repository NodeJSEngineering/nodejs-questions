
function* crossBridge() {
const reply = yield 'What is your favorite color?';
console.log(reply);
if (reply !== 'yellow') return 'Wrong!'
return 'You may pass.';
}

{
const iter = crossBridge();
const q = iter.next().value; // Iterator yields question
console.log(q);
const a = iter.next('blue').value; // Pass reply back into generator
console.log(a);
}
// What is your favorite color?
// blue
// Wrong!

{
const iter = crossBridge();
const q = iter.next().value;
console.log(q);
const a = iter.next('yellow').value;
console.log(a);
}
// What is your favorite color?
// yellow
// You may pass.

function* UUIDGenerator() {
let d, r;
while (true) {
yield 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
r = (new Date().getTime() + Math.random() * 16) % 16 | 0;
d = Math.floor(d / 16);
return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
});
}
};

const UUID = UUIDGenerator(); // UUID is our generator object
UUID.next()
console.log(UUID.next()) // {value: "e965ee24-e05e-489d-8283-34e62d0339e6", done: false}
console.log(UUID.next())
function* myGenerator() {
// the asterisk marks this as a generator
yield "Yo!";
yield 'red';
yield 'orange';
yield 'yellow';
yield 'green';
yield 'blue';
yield 'indigo';
yield 'violet';
}

var iterator = myGenerator();
var result = iterator.next();
console.log(result) // result -> { value: "Yo!", done: false }
// value property: Contains whatever value you pass back with the yield expression
// done property: A boolean that indicates if iterator should finish execution or not.
// ...
var lastIteration = iterator.next();
console.log(lastIteration); // { value: undefined, done: true }
var array = [10, 20, 30, 40, 50, 60];
function* myGeneratorw(numbers) {
for (var i = 0; i < numbers.length; i++) {
yield numbers[i];
}
}
var iterator2 = myGeneratorw(array);
console.log(iterator2.next()); // {value: 10, done: false}
function* myGenerator3(hello) {
var world = yield hello;
}
var gen = myGenerator3("Hello");
var value = gen.next();
console.log(value) // {value: "Hello", done: false}
var value2 = gen.next("World");
console.log(value2) // {value: undefined, done: true}
function* gener(a, b) {
let k = yield a + b;
let m = yield a + b + k;
yield a + b + k + m;
}
var gene = gener(10, 20);
console.log(gene.next()) // {value: 30, done: false}
console.log(gene.next(50)); // {value: 80, done: false}
console.log(gene.next(100)); // {value: 180, done: false}
console.log(gene.next()); // {value: undefined, done: true}
let gen1 = function* () {
yield 0 + 1;
yield 0 + 2;
yield 0 + 3;
yield "hello"
}
let gencall = gen1();
console.log(gencall.next()) // {value: 1, done: false}
console.log(gencall.next()) // {value: 2, done: false}
console.log(gencall.next()) // {value: 3, done: false}

console.log(gencall.next()) // {value: "hello", done: false}
console.log(gencall.next()) // {value: undefined, done: true}