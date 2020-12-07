/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

Example 1:
  Input: nums = [-1,0,1,2,-1,-4]
    threeSum([-1,0,1,2,-1,-4])
  Output: [[-1,-1,2],[-1,0,1]]

Example 2:
  Input: nums = []
    threeSum([])
  Output: []

Example 3:
  Input: nums = [0]
    threeSum([0])
  Output: []

Constraints:
  0 <= nums.length <= 3000
  -10^5 <= nums[i] <= 10^5
*/

var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let target = -nums[i];
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      if (nums[left] + nums[right] == target) {
        result.push([nums[i], nums[left], nums[right]]);
        while (nums[left + 1] == nums[left++]);
        while (nums[right - 1] == nums[right--]);
      } else if (nums[left] + nums[right] < target) {
          left++;
      } else {
        right--;
      }
    }
    while (nums[i + 1] == nums[i]) {
      i++
    }
  }
  return result;
};
