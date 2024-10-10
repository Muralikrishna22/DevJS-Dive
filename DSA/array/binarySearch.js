
let nums = [2,44,24,5,2,23,32,46,36,57856,643,523,42,5,36,345,234,234,234].sort((a,b) => a-b)
console.log(nums)
let target = 2

const binarySearch = (arr, target) => {
    let firstIndex = 0
    let lastIndex = arr.length-1
    while(firstIndex <= lastIndex){
        let midIndex = Math.floor((firstIndex+lastIndex) /2)
        if(arr[midIndex] == target){
            return midIndex
        }
        if(target > arr[midIndex]){
            firstIndex = midIndex
        }else if(target < arr[midIndex]){
            lastIndex = midIndex
        }
    }
}

let res = binarySearch(nums,target)
console.log(res)



