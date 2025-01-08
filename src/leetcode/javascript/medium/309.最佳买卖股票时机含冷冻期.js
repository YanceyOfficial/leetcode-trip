/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length
  const dp = new Array(n).fill(0).map(() => new Array(4).fill(0))

  dp[0][0] = -prices[0]
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][3], dp[i - 1][1] - prices[i])
    dp[i][1] = Math.max(dp[i - 1][3], dp[i - 1][1])
    dp[i][2] = dp[i - 1][0] + prices[i]
    dp[i][3] = dp[i - 1][2]
  }

  return Math.max(dp[n - 1][3], dp[n - 1][2], dp[n - 1][1])
}
// @lc code=end
