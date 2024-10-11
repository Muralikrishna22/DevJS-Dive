// The Two Sum problem is a classic algorithmic problem where you are given an array of integers and a target sum.
// The goal is to determine whether there are two distinct numbers in the array that add up to the target sum.
// If such a pair exists, you typically return their indices or the values themselves.

// Example:
// Input:
    // Array: [2, 7, 11, 15]
    // Target: 9
// Output: [0, 1] (since 2 + 7 = 9)

function twoSum(arr, sum){
    let obj = {}
    for(let i=0; i<arr.length; i++){
        // check diff of target and current exists in obj (if exits then return [extingNumIndex, currentIndex])
        if(obj[sum - arr[i]]) return [obj[sum - arr[i]], i]
        obj[arr[i]] = i
    }
    return null
}

let arr = [2,4,5,7]
let sum = 9
let res = twoSum(arr, sum)

console.log(res) // [ 1, 2 ]