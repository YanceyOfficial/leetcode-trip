/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const n = s.length
  const dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0))

  for (let i = n - 1; i >= 0; i--) {
    dp[i][i] = 1
    const char1 = s[i]
    for (let j = i + 1; j < n; j++) {
      const char2 = s[j]
      if (char1 === char2) {
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[0][n - 1]
}
// @lc code=end
