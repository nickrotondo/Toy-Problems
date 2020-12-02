/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).

* Leetcode #5
*/

let longestPalindrome = function (string) {

};

let palindromeChecker = function (substring) {
  let start = 0;
  let end = substring.length - 1;
  while (start < end) {
    if (substring[start] !== substring[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
}

// PALINDROME CHECKER FUNCTION:
//   Set two counters - one to start at the first character and one at the last.
//   If the characters don't match,
//     return false
//   If they do,
//     go to the next letter in both directions
//   Stop when they get to the middle letter(s)

// LONGEST PALINDROME SUBSTRING FINDER:
//