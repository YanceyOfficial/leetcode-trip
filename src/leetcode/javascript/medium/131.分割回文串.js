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
  const dp = new Array(n)
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n)
  }
  for (let j = 0; j < n; j++) {
    for (let i = 0; i <= j; i++) {
      if (i == j) {
        dp[i][j] = true
      } else if (j - i == 1 && s[i] == s[j]) {
        dp[i][j] = true
      } else if (j - i > 1 && s[i] == s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true
      } else {
        dp[i][j] = false
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

// @lc code=end
console.log(partition('google'))
console.log(partition('aab'))
console.log(partition('a'))
