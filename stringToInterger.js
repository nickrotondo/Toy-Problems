/*
Implement atoi which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

Note:
  Only the space character ' ' is considered a whitespace character.
  Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, 231 − 1 or −231 is returned.

Examples:

  Input: str = "42"
  Output: 42

  Input: str = "   -42"
  Output: -42
  Explanation: The first non-whitespace character is '-', which is the minus sign. Then take as many numerical digits as possible, which gets 42.

  Input: str = "4193 with words"
  Output: 4193
  Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.

  Input: str = "words and 987"
  Output: 0
  Explanation: The first non-whitespace character is 'w', which is not a numerical digit or a +/- sign. Therefore no valid conversion could be performed.

  Input: str = "-91283472332"
  Output: -2147483648
  Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer. Thefore INT_MIN (−231) is returned.

Constraints:
  0 <= s.length <= 200
  s consists of English letters (lower-case and upper-case), digits, ' ', '+', '-' and '.'.
*/

let myAtoi = function (s) {
  let str = s.trim();
  let result = 0;
  let sign = 1;
  const max = Math.pow(2, 31);
  if (str[0] === '-') {
    sign = -1;
    str = str.slice(1);
  } else if (str[0] === '+') {
    str = str.slice(1);
  }
  for (let i = 0; i < str.length; i++) {
    if (!(str[i] - '0' >= 0 && str[i] - '0' <= 9) || (str[i] === ' ')) { // If current char is not a valid integer
      if (result === 0) {
        return result;
      } else {
        return result * sign;
      }
    } else {
      result = (result * 10) + (str[i] - '0');
    }
    if (result >= max) {
      if (sign === -1) {
        return max * sign;
      } else {
        return max - 1;
      }
    }
  }
  return result * sign;
};
