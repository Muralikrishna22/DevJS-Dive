// // Curry a function with a dynamic number of arguments?
// // Answer: A curried function with a dynamic number of arguments can be created using recursion and closures.

// <---------- TO BE IMPLEMENTED -------------->

// function curry(fn) {
//   return function curried(...args) {
//     console.log(args)
//     if (args.length == 0) {
//       return fn(...args);
//     } else {
//       return function(...moreArgs) {
//         return curried(...moreArgs)
//         // return curried(...args.concat(moreArgs));
//       };
//     }
//   };
// }

// function sum(...args) {
//     return args.reduce((acc, cur) => acc + cur, 0)
// }


// const curriedSum = curry(sum);
// console.log(curriedSum(1)());
// // console.log(curriedSum(1, 2)(7,5));