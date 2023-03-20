/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  return process(nums, 2)
}

/**
 * @param {number[]} nums
 * @param {number} k 最多保留 k 位相同数字
 * @return {number}
 */
var process = function (nums, k) {
  const n = nums.length
  let slow = 0

  for (let fast = 0; fast < n; fast++) {
    if (slow < k || nums[slow - k] !== nums[fast]) {
      nums[slow++] = nums[fast]
    }
  }

  return slow
}
// @lc code=end
console.log(removeDuplicates([1, 1, 1, 2, 2, 3]))
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]))
