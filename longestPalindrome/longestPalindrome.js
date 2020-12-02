/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).

* Leetcode #5
*/

let longestPalindrome = function (string) {
  let currentLongest = '';
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      let currentSubstring = string.substring(i, j)
      if (palindromeChecker(currentSubstring) && currentSubstring.length > currentLongest.length) {
        currentLongest = currentSubstring;
      }
    }
  }
  return currentLongest;
};

let palindromeChecker = function (sub) {
  let start = 0;
  let end = sub.length - 1;
  let isPalindrome = true;
  while (start <= end) {
    if (sub[start] !== sub[end]) {
      isPalindrome = false;
    }
    start++;
    end--;
  }
  return isPalindrome;
}

// PALINDROME CHECKER FUNCTION:
//   Set two counters - one to start at the first character and one at the last.
//   If the characters don't match,
//     return false
//   If they do,
//     go to the next letter in both directions
//   Stop when they get to the middle letter(s)

// LONGEST PALINDROME SUBSTRING FINDER:
//   Set longest palindrome variable to empty string
//   Iterate over the string
//     for each character, iterate over the string again
//       check each iteration of substring with palindromeChecker and if true AND
//       it's longer than the current longest palindrome
//         set current substring as longest palindrome
//   return longest palindrome
