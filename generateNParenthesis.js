/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
  Input: n = 3
  Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
  Input: n = 1
  Output: ["()"]

Constraints:
  1 <= n <= 8
*/

var generateParenthesis = function(n) {
  let results = [];
  const backtrack = function (currentString, open, close, max) {
    if (currentString.length === max * 2) {
      results.push(currentString);
      return;
    }
    if (open < max) backtrack(currentString + '(', open + 1, close, max);
    if (close < open) backtrack(currentString + ')', open, close + 1, max);
  }
  backtrack('', 0, 0, n)
  return results;
};


// results array
// backtracking function
//  when string is equal to 2 x n
//    push parenthesis to results
//    return
//  if open is less than n
//    backtracking function with string + ( and increment open
//  if close is less than open
//    backtracking function with string + ) and increment close
//  return the results array