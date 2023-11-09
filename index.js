function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Initialize pointers
  let start = 0;
  let end = str.length - 1;

  // Compare characters at the pointers
  while (start < end) {
    if (str[start] !== str[end]) {
      return false; 
    }
    start++;
    end--;
  }

  return true; // Palindrome
}

/* 
  Add your pseudocode here

cleanedStr = Removes non-alphanumeric characters from the string
  lowercaseStr = Converts the string to lowercase
  start = 0 // Initialize start pointer
  end = LENGTH(lowercaseStr) - 1 // Initialize the end pointer

  WHILE start < end // Loop through the string until the pointers meet
    IF lowercaseStr[start] != lowercaseStr[end] // Check if the characters at the pointers are not equal
      RETURN false // string is not a palindrome

    INCREMENT start // Move the start pointer forward
    DECREMENT end // Move the end pointer backward

  RETURN true // The string is a palindrome
*/





/*
  Add written explanation of your solution here
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
