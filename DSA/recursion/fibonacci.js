
// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.

// The sequence can be expressed as:
// F(0) = 0
// F(1) = 1
// F(n) = F(n-1) + F(n-2) for n > 1

// Example:
// The Fibonacci sequence begins like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...


function fibonacci(n){
    if(n <= 1){
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

let res = fibonacci(7)
console.log(res) // 13

