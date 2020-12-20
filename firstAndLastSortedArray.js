/*
34. Find First and Last Position of Element in Sorted Array
Medium

Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

Follow up: Could you write an algorithm with O(log n) runtime complexity?

Example 1:
  Input: nums = [5,7,7,8,8,10], target = 8
  Output: [3,4]

Example 2:
  Input: nums = [5,7,7,8,8,10], target = 6
  Output: [-1,-1]

Example 3:
  Input: nums = [], target = 0
  Output: [-1,-1]

Constraints:
  0 <= nums.length <= 10^5
  -10^9 <= nums[i] <= 10^9
  nums is a non-decreasing array.
  -10^9 <= target <= 10^9
*/

// Brute force:
var searchRange = function(nums, target) {
  var startAndEndIndexes = [];
  var targetFound = false;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === target && !targetFound) {
      targetFound = true;
      startAndEndIndexes.push(i);
    }
    if (nums[i] === target && targetFound && nums[i + 1] !== target) {
      startAndEndIndexes.push(i);
    }
  }
  if (!targetFound) return [-1, -1];
  else return startAndEndIndexes;
};
