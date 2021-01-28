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
  candidates.sort((a, b) => a - b)
  const len = candidates.length
  const res = []
  const track = []

  const backtrack = (track, sum) => {
    if (target === sum) {
      res.push(track)
      sum = 0
      return
    }

    for (let i = 0; i < len; i++) {
      if (sum < target) {
        track.push(candidates[i])
        sum += candidates[i]
        backtrack(track.slice(), sum)
        track.pop()
        sum -= candidates[i]
      }
    }
  }

  backtrack(track, 0)
  return res
}
// @lc code=end
console.log(combinationSum([2, 3, 6, 7], 7))
