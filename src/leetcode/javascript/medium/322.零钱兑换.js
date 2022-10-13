/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const n = amount + 1
  const dp = new Array(n).fill(n)

  dp[0] = 0
  for (const coin of coins) {
    for (let i = coin; i < n; i++) {
      dp[i] = Math.min(dp[i], 1 + dp[i - coin])
    }
  }

  return dp[amount] === n ? -1 : dp[amount]
}
// @lc code=end
console.log(coinChange([1, 2, 5], 11))
