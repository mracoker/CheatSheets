// Understanding Variable Declaration: Beginners vs Pros
// Beginners:
var x = 10;
// Noobs often use the var keyword for variable declaration, which has scope-related issues and might lead to unexpected behavior in larger projects.
// Pros:
let x = 10;
// Pros prefer using let and const for variable declaration to avoid scope problems and ensure better code readability and maintainability.

// Embracing Arrow Functions: Beginners vs Pros
// Beginners:
function add(a, b) {
  return a + b;
}
// Noobs tend to use traditional function syntax, which can be lengthy and sometimes confusing, especially for simple functions.
// Pros:
const add = (a, b) => a + b;
// Pros utilize arrow functions for concise syntax, lexical scoping, and maintaining this context, making the code more expressive and clean.

// Handling Default Parameters: Beginners vs Pros
// Beginners:
function greet(name) {
  name = name || 'Guest';
  console.log('Hello, ' + name + '!');
}
// Noobs might use logical OR operators for default parameters, but this approach can fail with falsy values like 0 or an empty string.
// Pros:
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}
// Pros leverage default parameter values directly in the function signature, providing a safer and more intuitive way to handle default values.