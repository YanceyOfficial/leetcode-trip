/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const n1 = s.length
  const n2 = p.length
  const dp = new Array(n1 + 1)
    .fill(false)
    .map(() => new Array(n2 + 1).fill(false))
  dp[0][0] = true

  for (let i = 1; i <= n2 && p[i - 1] === '*'; i++) {
    dp[0][i] = true
  }

  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '?') {
        dp[i][j] = dp[i - 1][j - 1]
      } else if (p[j - 1] === '*') {
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1]
      }
    }
  }

  return dp[n1][n2]
}
// @lc code=end
console.log(isMatch('aa', 'a'))
console.log(isMatch('aa', '*'))
console.log(isMatch('cb', '?a'))
console.log(isMatch('adceb', '*a*b'))
console.log(isMatch('acdcb', 'a*c?b'))
