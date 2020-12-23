/*
HACKERRANK

Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

EXAMPLE
Input: '12:01:00PM'
Output: '12:01:00'

Input: '12:01:00AM'
Output: '00:01:00'

Function Description
  Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):
  string s: a time in 12 hour format

Returns
  string: the time in 24 hour format

Input Format
  A single string s that represents a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM).

Constraints
  All input times are valid

Sample Input 0
  07:05:45PM

Sample Output 0
  19:05:45
*/

function timeConversion(s) {
  let hours = parseInt(s.substr(0, 2)),
  minutesAndSeconds = s.substr(3, 5),
  suffix = s.substr(8, 2);

  if (hours > 12 || hours < 1) return null;
  if (hours === 12) {
    if (suffix === 'AM') return `00:${minutesAndSeconds}`;
    else return `12:${minutesAndSeconds}`;
  } else if (suffix === 'AM') {
    (hours < 10) ? hours = ('0' + hours) : hours;
    return `${hours}:${minutesAndSeconds}`;
  } else {
    return (hours + 12) + `:${minutesAndSeconds}`;
  }
};
