/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   let sum = 0
//   for (let i = 1; i < prices.length; i++) {
//     sum += Math.max(prices[i] - prices[i - 1], 0)
//   }
//   return sum
// }

var maxProfit = function (prices) {
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

// @lc code=end

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
