/*
 * @lc app=leetcode.cn id=132 lang=javascript
 *
 * [132] 分割回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  const n = s.length
  const isPalindrome = new Array(n)
    .fill(false)
    .map(() => new Array(n).fill(false))
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (
        i - j === 0 ||
        (i - j === 1 && s[i] === s[j]) ||
        (i - j > 1 && s[i] === s[j] && isPalindrome[j + 1][i - 1])
      ) {
        isPalindrome[j][i] = true
      }
    }
  }

  const dp = new Array(n).fill(Number.MAX_SAFE_INTEGER)
  dp[0] = 0
  for (let i = 1; i < n; ++i) {
    if (isPalindrome[0][i]) {
      dp[i] = 0
    } else {
      for (let j = 1; j <= i; ++j) {
        if (isPalindrome[j][i]) {
          dp[i] = Math.min(dp[i], dp[j - 1] + 1)
        }
      }
    }
  }

  return dp[n - 1]
}
// @lc code=end
console.log(minCut('aab'))
