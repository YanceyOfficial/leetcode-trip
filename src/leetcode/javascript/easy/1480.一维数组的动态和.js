/*
 * @lc app=leetcode.cn id=1480 lang=javascript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const result = new Array(nums.length)
  result[0] = nums[0]

  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] + nums[i]
  }

  return result
}
// @lc code=end
