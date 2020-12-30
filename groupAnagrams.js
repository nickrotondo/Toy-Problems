/*
49. Group Anagrams
Medium

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
  Input: strs = ["eat","tea","tan","ate","nat","bat"]
  Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
  Input: strs = [""]
  Output: [[""]]

Example 3:
  Input: strs = ["a"]
  Output: [["a"]]

Constraints:
  1 <= strs.length <= 10^4
  0 <= strs[i].length <= 100
  strs[i] consists of lower-case English letters.
*/

var groupAnagrams = function(strs) {
  let map = new Map();
  for (let str of strs) {
    const k = str.split('').sort().join('');
    let v = map.get(k) || [];
    v.push(str);
    map.set(k, v);
  }
  return Array.from(map.values());
};
