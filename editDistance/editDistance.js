// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

function editDistance(str1, str2) {
  const matrix = [];
  for (let i = 0; i < str1.length + 1; i++) {
    const row = [];
    for (let j = 0; j < str2.length + 1; j++) {
      row.push(j);
    }
    row[0] = i;
    matrix.push(row);
  }

  for (let i = 1; i < str1.length + 1; i++) {
    for (let j = 1; j < str2.length + 1; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i][j - 1]) + 1
      }
    }
  }
  return matrix[str1.length][str2.length];
}

// Examples:
// console.log(editDistance('adc', 'abc'))          // 1
// console.log(editDistance('abc', 'nick'))         // 3
// console.log(editDistance('driving', 'diving'))   // 1
// console.log(editDistance('debate', 'irate'))     // 3
// console.log(editDistance('football', 'cookies')) // 6
// console.log(editDistance('football', ''))        // 8
// console.log(editDistance('', 'cookies'))         // 7

/*
  Matrix Example:
  — At each point in the matrix, what would it take to turn str1 into str2?
  — E.G. What would it take to turn "" + a + b into "" + n ?  => 2
      ""  a  b  c
    "" 0  1  2  3
    n  1  1  2  3
    i  2  2  2  3
    c  3  3  3  2
    k  4  4  4  3

    1) For each point, look at numbers at matrix[i - 1][j], matrix[i][j - 1] and matrix[i - 1][j - 1]
    2) Take the minimum of the three and add one.
    3) If letter from str1 matches letter in str2, take the value at matrix[i - 1][j - 1]
*/
