
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
  if (romanNumeral.length === 0 || typeof romanNumeral !== 'string') {
    return null;
  };
  let result = 0;
  if (romanNumeral.length === 1) {
    return DIGIT_VALUES[romanNumeral];
  } else {
    let values = [];
    for (let i = 0; i < romanNumeral.length; i++) {
      values.push(DIGIT_VALUES[romanNumeral[i]]);
    };
    result += values[0];
    if (values[0] >= values[1]) {
      result += values[1];
    } else {
      result -= values[1];
    };
  }
  return Math.abs(result);
};

// console.log(translateRomanNumeral('LX'));
// console.log(translateRomanNumeral('IV'));
// console.log(translateRomanNumeral(50));
// console.log(translateRomanNumeral(''));
