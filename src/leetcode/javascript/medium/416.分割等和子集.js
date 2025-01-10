/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let capacity = nums.reduce((acc, val) => acc + val)
  if (capacity % 2 === 1) return false
  const n = nums.length
  capacity /= 2

  const dp = Array(capacity + 1).fill(false)
  dp[0] = true

  for (let i = 0; i < n; i++) {
    for (let w = capacity; w >= nums[i]; w--) {
      dp[w] = dp[w] || dp[w - nums[i]]
    }
  }

  return dp[capacity]
}
// @lc code=end
console.log(canPartition([1, 5, 11, 5]))
// console.log(canPartition([1, 2, 3, 5]))
