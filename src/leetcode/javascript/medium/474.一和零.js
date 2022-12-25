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
  const oArr = []
  for (const str of strs) {
    const subArr = new Array(2).fill(0)
    const strArr = str.split('')
    for (const char of strArr) {
      subArr[char] += 1
    }
    oArr.push(subArr)
  }

  const dp = new Array(len + 1)
    .fill(0)
    .map(() => new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0)))

  for (let i = 1; i <= len; i++) {
    const [c0, c1] = oArr[i - 1]
    for (let j = 0; j <= m; j++) {
      for (let k = 0; k <= n; k++) {
        if (j - c0 < 0 || k - c1 < 0) {
          dp[i][j][k] = dp[i - 1][j][k]
        } else {
          dp[i][j][k] = Math.max(dp[i - 1][j][k], dp[i - 1][j - c0][k - c1] + 1)
        }
      }
    }
  }

  return dp[len][m][n]
}
// @lc code=end
