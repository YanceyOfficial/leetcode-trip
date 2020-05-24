/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let ans = nums[0]
  let sum = 0

  for (let i = 0, len = nums.length; i < len; i++) {
    if (sum > 0) {
      sum += nums[i]
    } else {
      sum = nums[i]
    }

    ans = Math.max(ans, sum)
  }
  return ans
}
// @lc code=end
