/*
LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS
Leetcode #3

Given a string s, find the length of the longest substring without repeating characters.

Example 1:
  Input: s = "abcabcbb"
  Output: 3
  Explanation: The answer is "abc", with the length of 3.

Example 2:
  Input: s = "bbbbb"
  Output: 1
  Explanation: The answer is "b", with the length of 1.

Example 3:
  Input: s = "pwwkew"
  Output: 3
  Explanation: The answer is "wke", with the length of 3.
  Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Example 4:
  Input: s = ""
  Output: 0

Example 5:
  Input: s = "aab"
  Output: 2

Example 6:
  Input: s = "dvdf"
  Output: 3

Constraints:
  0 <= s.length <= 5 * 104
  s consists of English letters, digits, symbols and spaces.
*/

// FIRST SOLUTION:
// let lengthOfLongestSubstring = function (s) {
//   // Max substring length
//   let max = 0;
//   // Iterate over each character in s
//   for (let i = 0; i < s.length; i++) {
//     // instantiate duplicate finder and count of current substring length
//     let dupFinder = {}, count = 0;
//     // Iterate over current substring
//     for (let j = i; j < s.length; j++) {
//       let currentChar = s[j];
//       // Check if current character has not already been seen
//       if (!dupFinder[currentChar]) {
//         // Mark current character as seen
//         dupFinder[currentChar] = 1;
//         // Increment count of current substring length
//         count++;
//         // If current substring length is greater than the max substring length, set max to current
//         if (count > max) {
//           max = count;
//         }
//         // If the current character has already been seen in this substring,
//           // break out of iteration and go to next substring
//       } else {
//         break;
//       }
//       // If current iteration makes it all the was to the end of s,
//         // We know we already have the longest substring so return
//       if (j === s.length) {
//         return max;
//       }
//     }
//   }
//   // Return the length of the longest substring
//   return max;
// };

// MORE OPTIMAL SOLUTION (SLIDING WINDOW USING A SET):
let lengthOfLongestSubstring = function (s) {
  let start = 0, maxLength = 0;
  let dupFinder = new Set();
  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    while(dupFinder.has(currentChar)) {
      dupFinder.delete(s[start++]);
    }
    dupFinder.add(currentChar);
    maxLength = Math.max(maxLength, (i - start + 1));
  }
  return maxLength;
}

// SUDO CODE:
// Instantiaite a start point and a max length variable
  // Create a new set

  // Iterate over the length of s
    // Create variable for current char

    // While the set contains the current character
      // Delete characters from the set at the start point
      // increment the start point

    // Add the current character to the set
    // Set the max length to whichever is greater between (the current max) and (end - start + 1)

  // Return the max
