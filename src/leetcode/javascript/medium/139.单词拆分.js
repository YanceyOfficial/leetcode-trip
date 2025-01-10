/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const n = s.length
  const dp = new Array(n + 1).fill(false)
  dp[0] = true

  for (let w = 1; w <= n; w++) {
    for (let i = 0; i < w; i++) {
      if (dp[i] && wordDict.includes(s.slice(i, w))) {
        dp[w] = true
        break
      }
    }
  }

  return dp[n]
}
// @lc code=end
