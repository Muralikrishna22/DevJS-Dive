let nums = [2,56,52,12,36,6,2,23,5,5,57,3,32,57,3,6]

const merge = (left,right) => {
    let sortedArr = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr, ...left, ...right]
}

const mergeSort = (arr) => {
    if(arr.length < 2){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, mid))
    let right =  mergeSort(arr.slice(mid))

    return merge(left, right)
}

console.time('mergeSort')
console.log(mergeSort(nums))
console.timeEnd('mergeSort')

// result will be: [ 2, 2, 3, 3, 5, 5, 6, 6, 12, 23, 32, 36, 52, 56, 57, 57 ]