
# Execution Context in JavaScript

## Overview of Execution Context

**Execution Context** is a conceptual environment where JavaScript code is evaluated and executed. Each execution context contains:

- **Variable Environment**: Holds variables and function declarations.
- **Lexical Environment**: Contains the environment record and a reference to the outer environment.
- **`this` Binding**: Refers to the context in which the function is executed.

## Example Code

```javascript
var globalVar = 'I am a global variable';

function outerFunction() {
    var outerVar = 'I am an outer variable';

    function innerFunction() {
        var innerVar = 'I am an inner variable';
        console.log(globalVar);  // Accessing global variable
        console.log(outerVar);    // Accessing outer variable
        console.log(innerVar);     // Accessing inner variable
    }

    innerFunction();
}

outerFunction();
```

## Execution Context Diagram

![Execution Context Diagram](https://via.placeholder.com/600x300?text=Execution+Context+Diagram)

| Execution Context Stack     | Description                                                 |
|-----------------------------|-------------------------------------------------------------|
| Global Context              | Holds global variables and functions                         |
| outerFunction Context       | Created when `outerFunction()` is called                    |
| innerFunction Context       | Created when `innerFunction()` is called                    |

## Execution Stack Flow Diagram

**Initial State:**
```
[GEC]  // Global Execution Context
```

1. When `outerFunction()` is called:
```
[GEC]                   // Global Execution Context
[outerFunction Context] // Execution Context for outerFunction
```

2. When `innerFunction()` is called:
```
[GEC]                    // Global Execution Context
[outerFunction Context]  // Execution Context for outerFunction
[innerFunction Context]  // Execution Context for innerFunction
```

3. After `innerFunction()` finishes:
```
[GEC]                    // Global Execution Context
[outerFunction Context]  // Execution Context for outerFunction
```

4. After `outerFunction()` finishes:
```
[GEC]                    // Global Execution Context
```

## Explanation of Each Part

1. **Global Context**:
   - **Variables**: `globalVar` and `outerFunction` are stored in the global context.
   - **Access**: Any function defined in the global context can access `globalVar`.

2. **Outer Function Context** (created when `outerFunction()` is called):
   - **Variables**: `outerVar` and `innerFunction` are stored in this context.
   - **Access**: `innerFunction()` can access:
     - `innerVar` from its own context.
     - `outerVar` from the `outerFunction` context.
     - `globalVar` from the global context.

3. **Inner Function Context** (created when `innerFunction()` is called):
   - **Variables**: `innerVar` is stored in this context.
   - **Access**: This function can access:
     - `innerVar` from its own context.
     - `outerVar` from the `outerFunction` context.
     - `globalVar` from the global context.

## Key Points

- **Execution Context** is created whenever a function is invoked.
- Each function has access to its own variables, variables from its parent function, and global variables.
- Understanding execution context is essential for grasping closures, scope, and variable lifetime in JavaScript.

