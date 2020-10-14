
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  if (typeof romanNumeral !== 'string') {
    return null;
  };
  result = 0;
  if (romanNumeral.length === 0) {
    return 0;
  } else if (romanNumeral.length === 1) {
    return DIGIT_VALUES[romanNumeral];
  } else {
    for (var i = 0; i < romanNumeral.length; i++) {
      if (DIGIT_VALUES[romanNumeral[i]] < DIGIT_VALUES[romanNumeral[i+1]]) {
        result -= DIGIT_VALUES[romanNumeral[i]];
      } else {
        result += DIGIT_VALUES[romanNumeral[i]]
      }
    }
  }
  return result;
};

/*
console.log(translateRomanNumeral('LX'));      // 60
console.log(translateRomanNumeral('IV'));      // 4
console.log(translateRomanNumeral(50));        // null
console.log(translateRomanNumeral(''));        // 0
console.log(translateRomanNumeral('XIV'));     // 14
console.log(translateRomanNumeral('MCM'));     // 1900
console.log(translateRomanNumeral('MCMLIV'));  // 1954
console.log(translateRomanNumeral('MDCCCCX')); // 1910
*/
