//Challenge 1 - Reverse a string

function reverseString(str){    
  return str.split("").reverse().join();
}

console.log(reverseString("hello"));