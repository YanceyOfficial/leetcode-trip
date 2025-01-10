/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  const len = strs.length

  const values = []
  for (const str of strs) {
    const tuple = [0, 0]
    for (const ch of str.split('')) {
      tuple[Number(ch)] += 1
    }
    values.push(tuple)
  }

  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  for (let i = 1; i <= len; i++) {
    const [zero, one] = values[i - 1]
    for (let j = m; j >= zero; j--) {
      for (let k = n; k >= one; k--) {
        dp[j][k] = Math.max(dp[j][k], dp[j - zero][k - one] + 1)
      }
    }
  }

  return dp[m][n]
}
// @lc code=end
