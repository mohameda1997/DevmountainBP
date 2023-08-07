let total = false;
for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
        if((arr[i] + arr[j]) === 0) {
            return !total
        }
    }
}
if(arr.length === 0) {
    return total
}
return total


console.log(addToZero([1, 2, 3, -2]));

/*
Runtime: O(n^2) (n squared) because of 2 loops O(n x n) 
*/

//2) Unique Characters
function hasUniqueChars(str){
uniqueCharArr = []
for(let i=0; i<str.length; i++){
  if(!uniqueCharArr.includes(str[i])){
    uniqueCharArr.push(str[i])
  }
  else{
    return false
  }
}
return true
}

console.log(hasUniqueChars("Moonday"))


/*
Runtime: O(n) because it has a single loop
*/

//3) Pangram Sentence
function isPangram(sentence) {
let string = sentence.toLowerCase()
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
for(let i = 0; i < alphabet.length; i++) {
    if(!string.includes(alphabet[i])) {
        return false
    }
}
return true
}


console.log(isPangram("The quick brown fox jumps over the lazy dog!"))


/*
Runtime: O(n) because it has a single loop
*/

//4) Longest Word
function findLongestWord(arr) {
for(let i = 0; i < arr.length; i++) {
    if(arr[i].length > arr[i+1].length) {
        return arr[i].length
    }
    else{
        return arr[i+1].length
    }
}
}

console.log(findLongestWord(["hi", "hello"]))

/*Runtime: O(n) because it has a single loop*/


