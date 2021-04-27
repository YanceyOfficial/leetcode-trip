/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length
  const maxK = 2

  const dp = new Array(n).fill(
    JSON.parse(JSON.stringify(new Array(maxK + 1).fill([0, 0]))),
  )

  for (let i = 0; i < n; i++) {
    for (let k = maxK; k >= 1; k--) {
      if (i === 0) {
        //   Math.max(dp[-1][0], dp[-1][1] + prices[0])
        // = Math.max(0, Number.NEGATIVE_INFINITY + prices[0])
        // = 0
        dp[0][k][0] = 0

        //   Math.max(dp[-1][1], -prices[0])
        // = Math.max(Number.NEGATIVE_INFINITY, -prices[0])
        // = -prices[0]
        dp[0][k][1] = -prices[0]

        continue
      }

      dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
      dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])
    }
  }

  return dp[n - 1][maxK][0]
}
// @lc code=end

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]))
