function isPalindrome(word) {
  // Write your algorithm here
  for(i = 0; i < Math.floor(word.length/2); i++) {
    if(word[i] !== word[word.length-1-i])
      return false
    
  }
  return true


}

/* 
  Add your pseudocode here
  1. a for loop
    -iterates over the length of the word divided by 2
    -if the length is odd, rounddown (so that the loop should stop before hitting the middle letter)
  2. if statement that looks at the first and last character of any word
    -if match, then move onto next iteration. When it reaches the first non-match, it will return 'false' and that's the end of the function
    -if match throughout the whole iterations, it will return nothing, so add a return true after the for loop
   
*/

/*
  Add written explanation of your solution here
  Palindrome is when the word is the same as the word (where the letters are reversed)
  In other words, the last and first letter should be the same
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
