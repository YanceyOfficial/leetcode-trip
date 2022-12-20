/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  const m = s.length
  const n = t.length
  if (n > m) return 0
  const dp = new Array(n + 1)

  for (let i = 0; i <= m; i++) {
    dp[i][0] = 1
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] !== t[j - 1]) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1]
      }
    }
  }

  return dp[m][n]
}
// @lc code=end
console.log(numDistinct('babgbag', 'bag'))
