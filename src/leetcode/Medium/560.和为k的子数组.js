/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const len = nums.length
  const preSum = new Array(len + 1).fill(0)

  // 构造前缀和
  for (let i = 0; i < len; i++) {
    preSum[i + 1] = preSum[i] + nums[i]
  }

  let count = 0
  // 穷举所有子数组
  for (let left = 0; left < len; left++) {
    for (let right = left; right < len; right++) {
      if (preSum[right + 1] - preSum[left] === k) {
        count++
      }
    }
  }

  return count
}
// @lc code=end

console.log(subarraySum([1, 1, 1], 2))
