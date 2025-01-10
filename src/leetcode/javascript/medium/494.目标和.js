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
  if (Math.abs(target) > sum || (sum + target) % 2 === 1) return 0

  const capacity = (sum + target) / 2
  const dp = new Array(capacity + 1).fill(0)
  dp[0] = 1

  for (let i = 0; i < n; i++) {
    for (let j = capacity; j >= nums[i]; j--) {
      dp[j] = dp[j] + dp[j - nums[i]]
    }
  }

  return dp[capacity]
}
// @lc code=end
console.log(findTargetSumWays([1, 1, 1, 1, 1], 3))
