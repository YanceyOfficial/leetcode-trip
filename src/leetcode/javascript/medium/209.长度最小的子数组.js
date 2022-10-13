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
  const len = nums.length
  if (len === 0) return 0

  let start = 0
  let end = 0
  let totalLen = Number.MAX_SAFE_INTEGER
  let sum = 0

  while (end < len) {
    sum += nums[end]

    while (sum >= target) {
      totalLen = Math.min(totalLen, end - start + 1)
      sum -= nums[start]
      start++
    }

    end++
  }

  return totalLen == Number.MAX_SAFE_INTEGER ? 0 : totalLen
}
// @lc code=end
