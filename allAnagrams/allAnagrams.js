/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

 var allAnagrams = function(string, anagram = '', anagrams = []) {
  if (string.length === 0) {
    anagrams.push(anagram);
    return;
  }

  for (var i = 0; i < string.length; i++) {
    anagram += string[i];
    allAnagrams(string.slice(0, i) + string.slice(i + 1), anagram, anagrams);
    anagram = anagram.slice(0, anagram.length - 1);
  }
  return [...new Set(anagrams)];
};
