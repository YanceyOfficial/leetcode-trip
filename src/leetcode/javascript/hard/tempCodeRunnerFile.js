/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  const m = t.length
  const n = s.length
  
  if (m > n) return 0
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))



  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (t[i - 1] !== m[j - 1]) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1]
      }
    }
  }

  return dp[m][n]
}