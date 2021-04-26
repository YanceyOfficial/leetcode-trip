/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  const n = prices.length

  let dp_i_0 = 0,
    dp_i_1 = Number.NEGATIVE_INFINITY

  for (let i = 0; i < n; i++) {
    const temp = dp_i_0
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, temp - prices[i] - fee)
  }
  return dp_i_0
}
// @lc code=end

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2))
