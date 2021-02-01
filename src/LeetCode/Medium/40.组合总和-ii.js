/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const len = candidates.length
  const res = []
  const used = new Array(len).fill(false)
  candidates.sort((a, b) => a - b)

  const backtrack = (begin, track, sum) => {
    if (sum === target) {
      res.push(track.slice())
      return
    }

    for (let i = begin; i < len; i++) {
      if (candidates[i - 1] === candidates[i] && i - 1 >= 0 && !used[i - 1]) {
        continue
      }

      if (used[i]) {
        continue
      }

      if (sum < target) {
        track.push(candidates[i])
        used[i] = true
        backtrack(i, track, sum + candidates[i])
        track.pop()
        used[i] = false
      }
    }
  }

  backtrack(0, [], 0)

  return res
}
// @lc code=end
