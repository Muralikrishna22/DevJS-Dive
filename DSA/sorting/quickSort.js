
let nums = [2,44,24,5,2,23,32,46,36,57856,643,523,42,5,36,345,234,234,234]

const quickSort = (arr) => {
    if(arr.length < 2){
        return arr
    }

    const pivotIndex = Math.floor(Math.random() * arr.length)
    let left=[], right=[]
    for(i=0; i<arr.length; i++){
        if(i === pivotIndex){
            continue
        }else if(arr[i] < arr[pivotIndex]){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left), arr[pivotIndex], ...quickSort(right)]
}

console.log(quickSort(nums))

// result will be: [ 2, 2, 5, 5, 23, 24, 32, 36, 36, 42, 44, 46, 234, 234, 234, 345, 523, 643, 57856 ]








