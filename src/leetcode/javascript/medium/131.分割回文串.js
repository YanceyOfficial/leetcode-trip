/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const n = s.length
  const res = []
  const dp = new Array(n).fill(false).map(() => new Array(n).fill(false))

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (
        i - j === 0 ||
        (i - j === 1 && s[i] === s[j]) ||
        (i - j > 1 && s[i] === s[j] && dp[j + 1][i - 1])
      ) {
        dp[j][i] = true
      }
    }
  }

  const backtrack = (begin, track) => {
    if (begin === n) {
      res.push(track)
      return
    }

    for (let i = begin; i < n; i++) {
      if (dp[begin][i]) {
        track.push(s.slice(begin, i + 1))
        backtrack(i + 1, track.slice())
        track.pop()
      }
    }
  }

  backtrack(0, [])

  return res
}
