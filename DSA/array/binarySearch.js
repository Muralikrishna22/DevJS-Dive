
let nums = [ 2, 5, 23, 24, 32, 36, 42, 44, 46, 234, 345, 523, 643, 57856 ]
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
console.log(res) // 1



