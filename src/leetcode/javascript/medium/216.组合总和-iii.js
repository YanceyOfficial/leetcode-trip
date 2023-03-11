/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const res = []

  const dfs = (begin, track, sum) => {
    if (track.length === k && sum === n) {
      res.push(track.slice())
      return
    }

    for (let i = begin; i < 10; i++) {
      if (sum < n && !track.includes(i)) {
        track.push(i)
        dfs(i, track, sum + i)
        track.pop()
      }
    }
  }

  dfs(1, [], 0)

  return res
}
// @lc code=end
