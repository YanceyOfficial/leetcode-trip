/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitInfinity = function (prices) {
  const n = prices.length

  let dp_i_0 = 0,
    dp_i_1 = Number.NEGATIVE_INFINITY

  for (let i = 0; i < n; i++) {
    const temp = dp_i_0
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, temp - prices[i])
  }
  return dp_i_0
}

var maxProfit = function (k, prices) {
  const n = prices.length
  const maxK = k

  if (maxK > n / 2) {
    return maxProfitInfinity(prices)
  }

  // 注意初始化 JavaScript 的傻逼三维数组, 小心引用类型.
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
