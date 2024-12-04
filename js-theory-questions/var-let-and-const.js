// <--------------------------------------- var (Function-scoped) ------------------------------------------------->
// Scope: var is function-scoped, meaning it's accessible throughout the entire function it's defined in, or globally if defined outside any function.
// Hoisting: Variables declared with var are hoisted to the top of their scope but are initialized as undefined. This means you can use the variable before its declaration.
// Re-declaration: var allows re-declaration of the same variable within the same scope.
function exampleVar() {
//   console.log(x);  // undefined due to hoisting
  var x = 10;
  console.log(x);  // 10
}
exampleVar();
// Example of re-declaration:
// javascript
var a = 1;
var a = 2;  // No error, a gets re-declared
console.log(a);  // 2


// <------------------------------------------- let (Block-scoped) ------------------------------------------------>

// Scope: let is block-scoped, meaning it is only accessible within the block (i.e., { }) it is declared in, such as loops, conditionals, or functions.
// Hoisting: Variables declared with let are hoisted but not initialized. Accessing them before the declaration results in a ReferenceError.
// Re-declaration: let cannot be re-declared within the same block scope, providing stricter control over variable declarations.
function exampleLet() {
  // console.log(y);  // Uncaught ReferenceError: Cannot access 'y' before initialization
  let y = 10;
  console.log(y);  // 10
}
exampleLet();
// Example of block scope:

if (true) {
  let b = 1;
  console.log(b);  // 1
}
// console.log(b);  // Uncaught ReferenceError: b is not defined


// <--------------------------------------- const (Block-scoped, constant) -------------------------------------->

// Scope: Similar to let, const is block-scoped.
// Hoisting: Like let, const is hoisted but not initialized, resulting in a ReferenceError if accessed before declaration.
// Re-declaration: const variables cannot be re-declared or re-assigned. They must be initialized at the time of declaration.
// Mutability: While const variables cannot be reassigned, their contents (if an object or array) can be mutated.
const z = 10;
// z = 15;  // Uncaught TypeError: Assignment to constant variable.
console.log(z);  // 10

// Example with objects:
const obj = { name: "John" };
obj.name = "Doe";  // You can change properties inside the object
console.log(obj.name);  // "Doe"

// obj = {};  // Uncaught TypeError: Assignment to constant variable.
// Summary:









