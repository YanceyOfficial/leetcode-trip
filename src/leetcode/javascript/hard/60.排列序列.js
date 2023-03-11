/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 排列序列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let res = ''
  let count = 0

  const dfs = (track) => {
    if (track.length === n) {
      count += 1
      if (count === k) {
        res = track.slice().join('')
        return
      }
    }

    for (let i = 1; i <= n; i++) {
      if (!track.includes(i)) {
        track.push(i)
        dfs(track)
        track.pop()
      }
    }
  }

  dfs([])

  return res
}
// @lc code=end
