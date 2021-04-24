/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  const n = amount + 1
  const dp = new Array(n).fill(0)

  dp[0] = 1
  for (const coin of coins) {
    for (let i = coin; i < n; i++) {
      dp[i] += dp[i - coin]
    }
  }
  return dp[amount]
}
// @lc code=end
