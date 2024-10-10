
// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.
// For example, the word "listen" can be rearranged to form the word "silent."

function areAnagrams(str1, str2){
    if(str1?.length !== str2?.length) return false;

    function convertStringToObj(str){
        let obj =  {}
        for(let i of str){
            obj[i] = ( obj[i] || 0 ) + 1
        }
        return obj
    }

    let obj1 = convertStringToObj(str1)
    let obj2 = convertStringToObj(str2)

    for(let key in obj1){
       if(obj1[key] !== obj2[key]) return false
    }
    return true
}

let res = areAnagrams('care', 'race')
console.log(res)