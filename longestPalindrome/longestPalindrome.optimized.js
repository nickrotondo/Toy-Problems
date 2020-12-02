/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).

* Leetcode #5
*/

let longestPalindrome = function (string) {
  let start = 0, end = 0;
  for (let i = 0; i < string.length; i++) {
    let center = centerFinder(string, i);
    let bounds = expandAroundCenter(string, center[0], center[1]);
    let l = bounds[0], r = bounds[1];
    if (r - l > end - start) {
      start = l;
      end = r;
    }
    i = center[1];
  }
  return string.substring(start, end + 1);
};

let centerFinder = function (string, i) {
  let l = i, r = i;
  while (string[l] === string[++r] && r <= string.length);
  return [l, --r];
}

let expandAroundCenter = function (string, l, r) {
  while (l >= 0 && r < string.length && string[l] === string[r]) {
    l--;
    r++;
  }
  return [++l, --r];
}
