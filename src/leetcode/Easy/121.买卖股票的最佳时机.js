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
// var maxProfit = function(prices) {
//   const len = prices.length
//   let res = 0

//   for (let i = 0; i < len; i++) {
//     for (let j = len - 1; j > i; j--) {
//       const _res = prices[j] - prices[i]
//       if (_res > res) {
//         res = _res
//       }
//     }
//   }

//   return res > 0 ? res : 0
// }

var maxProfit = function(prices) {
  let minPrice = Number.MAX_VALUE
  let maxProfitVal = 0
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i])
    maxProfitVal = Math.max(maxProfitVal, prices[i] - minPrice)
  }
  return maxProfitVal
}
// @lc code=end
