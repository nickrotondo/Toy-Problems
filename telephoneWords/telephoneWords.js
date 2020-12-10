/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
*/

const phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
};

let telephoneWords = function(digits) {
  if (!digits) return [];
  let results = [];
  combinationFinder(digits, 0, '', results);
  return results;
};

let combinationFinder = function (digits, index, prefix, results) {
  if (index == digits.length) {
    results.push(prefix);
    return;
  } else {
    const letters = phoneDigitsToLetters[digits[index]];
    for (let i = 0; i < letters.length; i++) {
      combinationFinder(digits, index + 1, prefix + letters[i], results);
    }
  }
}

// const phoneDigitsToLetters = {
//   0: '0',
//   1: '1',
//   2: 'ABC',
//   3: 'DEF',
//   4: 'GHI',
//   5: 'JKL',
//   6: 'MNO',
//   7: 'PQRS',
//   8: 'TUV',
//   9: 'WXYZ'
// };

// var telephoneWords = function(digitString) {
//   var results = [];

//   var wordFinder = function(word, digitsLeft) {
//     if (digitsLeft.length === 0) {
//       if (word)
//       results.push(word);
//       return;
//     }
//     var currentDigitLetters = phoneDigitsToLetters[digitsLeft[0]].split('');
//     currentDigitLetters.forEach((currentLetter) => {
//       wordFinder(word + currentLetter, digitsLeft.slice(1));
//     });
//   }

//   wordFinder('', digitString.split(''));

//   return results;
// };
