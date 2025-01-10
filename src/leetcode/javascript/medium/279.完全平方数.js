/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = new Array(n + 1).fill(Infinity)
  dp[0] = 0 // 和为 0 的完全平方数数量为 0

  for (let i = 1; i <= n; i++) {
    for (let w = i * i; w <= n; w++) {
      dp[w] = Math.min(dp[w], dp[w - i * i] + 1)
    }
  }

  return dp[n]
}
// @lc code=end
console.log(numSquares(12))
console.log(numSquares(13))
