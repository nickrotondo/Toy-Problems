// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

function editDistance(str1, str2) {

}

// Ex:
// editDistance('adc', 'abc')          // 1
// editDistance('abc', 'nick')         // 3
// editDistance('driving', 'diving')   // 1
// editDistance('debate', 'irate')     // 3
// editDistance('football', 'cookies') // 6

/*
  Matrix Example:
  — At each point in the matrix, what would it take to turn str1 into str2?
  — E.G. What would it take to turn "" + a + b into "" + n ?  => 2
        "" a  b  c
    "" 0  1  2  3
    n  1  1  2  3
    i  2  2  2  3
    c  3  3  3  2
    k  4  4  4  3

    1) For each point, look at numbers at matrix[i - 1][j], matrix[i][j - 1] and matrix[i - 1][j - 1]
    2) Take the minimum of the three and add one.
    3) If letter from str1 matches letter in str2, take the value at matrix[i - 1][j - 1]
*/