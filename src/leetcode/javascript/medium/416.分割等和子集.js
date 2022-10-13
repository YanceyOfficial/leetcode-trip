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
  let sum = nums.reduce((acc, val) => acc + val)
  if (sum % 2 === 1) return false
  const n = nums.length
  sum /= 2

  const dp = []
  for (let i = 0; i <= n; i++) {
    dp.push(new Array(sum + 1).fill(false))
    dp[i][0] = true
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (j - nums[i - 1] < 0) {
        // 背包容量不足, 不能装入第 i 个物品
        dp[i][j] = dp[i - 1][j]
      } else {
        // 装入或不装入背包
        // 不装入: dp[i - 1][j]
        // 装入: 如果装了第 i 个物品, 就要看背包的剩余重量 j - nums[i-1] 限制下是否能够被恰好装满
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]
      }
    }
  }

  return dp[n][sum]
}
// @lc code=end
canPartition([1, 2, 3, 5])
