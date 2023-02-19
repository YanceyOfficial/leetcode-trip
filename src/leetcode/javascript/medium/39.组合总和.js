/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const len = candidates.length
  const res = []

  const backtracking = (begin, track, sum) => {
    if (target === sum) {
      res.push(track)
      return
    }

    for (let i = begin; i < len; i++) {
      if (sum < target) {
        track.push(candidates[i])
        backtracking(i, track.slice(), sum + candidates[i])
        track.pop()
      }
    }
  }

  backtracking(0, [], 0)
  return res
}
// @lc code=end
console.log(combinationSum([2, 3, 5], 8))
