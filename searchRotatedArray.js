/*
33. Search in Rotated Sorted Array
Medium

You are given an integer array nums sorted in ascending order, and an integer target.

Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

If target is found in the array return its index, otherwise, return -1.

Example 1:
  Input: nums = [4,5,6,7,0,1,2], target = 0
  Output: 4

Example 2:
  Input: nums = [4,5,6,7,0,1,2], target = 3
  Output: -1

Example 3:
  Input: nums = [1], target = 0
  Output: -1

Constraints:
  1 <= nums.length <= 5000
  -10^4 <= nums[i] <= 10^4
  All values of nums are unique.
  nums is guranteed to be rotated at some pivot.
  -10^4 <= target <= 10^4
*/

var search = function(nums, target) {
  if (nums == null || nums.length === 0) return -1;
  let left = 0, right = nums.length - 1;
  while (left < right) {
    let midpoint = Math.floor(left + (right - left) / 2);
    if (nums[midpoint] > nums[right]) {
      left = midpoint + 1;
    } else {
      right = midpoint;
    }
  }

  [4,5,6,7,0,1,2]

  let pivotPoint = left;
  left = 0;
  right = nums.length - 1;

  if (target >= nums[pivotPoint] && target <= nums[right]) {
    left = pivotPoint;
  } else {
    right = pivotPoint - 1;
  }

  while (left <= right) {
    let midpoint = Math.floor(left + (right - left) / 2);
    if (nums[midpoint] === target) {
      return midpoint;
    } else if (nums[midpoint] < target) {
      left = midpoint + 1;
    } else {
      right = midpoint - 1;
    }
  }

  return -1;
};
