
//  Palindrome number
// A palindrome is a string that reads the same forward and backward

// explination
// input : 121 if we reverse 121 then it should be 121


function isPalindrome(num){
    return num == num.toString()?.split('')?.reverse()?.join('')
}

console.log(isPalindrome(12321))