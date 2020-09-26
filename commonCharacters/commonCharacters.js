/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

// Create results array
// Iterate over string1
  // If current ccharacter = ' '
    // skip
  // Iterate over string2
    // If current character in string1 = current character in string2
      // add to results array and continue to next character in string1
// return results array as a string

var commonCharacters = function(string1, string2) {
  let results = [];

  for (let i = 0; i < string1.length; i++) {
    if (string1[i] === ' ') {
      continue;
    }
    for (let j = 0; j < string2.length; j++) {
      if (string1[i] === string2[j] && results.indexOf(string1[i]) === -1) {
        results.push(string1[i]);
        break;
      }
    }
  }

  return results.join('');
};
