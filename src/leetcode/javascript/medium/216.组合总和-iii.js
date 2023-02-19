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

  const backtracking = (begin, track, sum) => {
    if (track.length === k && sum === n) {
      res.push(track.slice())
      return
    }

    for (let i = begin; i < 10; i++) {
      if (sum < n && !track.includes(i)) {
        track.push(i)
        backtracking(i, track, sum + i)
        track.pop()
      }
    }
  }

  backtracking(1, [], 0)

  return res
}
// @lc code=end
