/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let n = prices.length

  // dp[-1][k][0] = 0
  let dp_i_0 = 0

  // dp[-1][k][1] = Number.NEGATIVE_INFINITY
  let dp_i_1 = Number.NEGATIVE_INFINITY

  for (let i = 0; i < n; i++) {
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, -prices[i])
  }
  return dp_i_0
}

// @lc code=end
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
