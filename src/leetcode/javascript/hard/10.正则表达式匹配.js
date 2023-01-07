/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const m = s.length
  const n = p.length
  const dp = new Array(m + 1)
    .fill(false)
    .map(() => new Array(n + 1).fill(false))

  dp[0][0] = true
  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 2]
    }
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1]
      } else if (p[j - 1] === '*') {
        if (s[i - 1] !== p[j - 2] && p[j - 2] !== '.') {
          dp[i][j] = dp[i][j - 2]
        } else {
          dp[i][j] = dp[i - 1][j] || dp[i][j - 2]
        }
      }
    }
  }

  return dp[m][n]
}
// @lc code=end
