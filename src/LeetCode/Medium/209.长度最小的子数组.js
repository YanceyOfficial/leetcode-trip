/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let i = 0
  let sum = 0
  let len = 0
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j]
    while (sum >= target) {
      len = len == 0 ? j - i + 1 : Math.min(len, j - i + 1)
      sum -= nums[i++]
    }
  }
  return len
}
// @lc code=end
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
