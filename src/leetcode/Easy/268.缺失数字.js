/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const len = nums.length
  const total = ((1 + len) * len) / 2

  return total - nums.reduce((acc, val) => acc + val)
}
// @lc code=end
