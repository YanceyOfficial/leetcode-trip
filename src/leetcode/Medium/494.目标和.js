/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const n = nums.length
  const sum = nums.reduce((acc, val) => acc + val)

  if (target > sum || (sum + target) % 2 === 1) return 0

  const weight = (sum + target) / 2

  const dp = new Array(weight + 1).fill(0)
  dp[0] = 1

  for (let i = 1; i <= n; i++) {
    for (let j = weight; j >= nums[i - 1]; j--) {
      dp[j] = dp[j] + dp[j - nums[i - 1]]
    }
  }

  return dp[weight]
}
// @lc code=end
console.log(findTargetSumWays([1, 1, 1, 1, 1], 3))
