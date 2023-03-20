/*
 * @lc app=leetcode.cn id=87 lang=javascript
 *
 * [87] 扰乱字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
  if (s1 === s2) return true

  const n = s1.length
  const dp = new Array(n)
    .fill(false)
    .map(() => new Array(n).fill(false).map(() => new Array(n + 1).fill(false)))

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j][1] = s1[i] === s2[j]
    }
  }

  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      for (let j = 0; j <= n - len; j++) {
        for (let k = 1; k < len; k++) {
          const planA = dp[i][j][k] && dp[i + k][j + k][len - k]
          const planB = dp[i][j + len - k][k] && dp[i + k][j][len - k]

          if (planA || planB) {
            dp[i][j][len] = true
          }
        }
      }
    }
  }
  return dp[0][0][n]
}

// @lc code=end
console.log(isScramble('great', 'rgeat'))
console.log(isScramble('abcde', 'caebd'))
console.log(isScramble('a', 'a'))
console.log(isScramble('abcdbdacbdac', 'bdacabcdbdac'))
