/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = []

  const dfs = function (begin, track) {
    if (track.length === k) {
      res.push(track)
      return
    }

    for (let i = begin; i <= n; i++) {
      if (!track.includes(i)) {
        track.push(i)
        dfs(i, track.slice())
        track.pop()
      }
    }
  }

  dfs(1, [])
  return res
}
// @lc code=end
