/*
 * @lc app=leetcode.cn id=377 lang=javascript
 *
 * [377] 组合总和 iv
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  const dp = new Array(target + 1).fill(0)
  dp[0] = 1 // 和为 0 的排列个数为 1（空排列）

  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i - nums[j] >= 0) {
        dp[i] += dp[i - nums[j]]
      }
    }
  }

  return dp[target]
}
// @lc code=end
