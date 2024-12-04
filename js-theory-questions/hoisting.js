// What is Hoisting in JavaScript?

// Explanation: In JavaScript, variable and function declarations are moved to the top of their
// containing scope (either global or function scope) during the compile phase.

// ex:
console.log(a);  // undefined (because of hoisting)
var a = 10;

function hosting(){
    a = 20
    return;
    function a(){} // this will be decleared at the top of the function
}

hosting()

console.log(a) // result will be 10





// companies asked
// 1. Make my trip