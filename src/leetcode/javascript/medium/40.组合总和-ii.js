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

    // 使用 begin 来限制下一次选择的起点, 是基于本次的选择, 这样下一次就不会选到本次选择的同层左边的数.
    for (let i = begin; i < len; i++) {
      // 同层相邻两个数不能相等, 当然要保证 i - 1 不越界, 且 i - 1 没被用过
      if (candidates[i - 1] === candidates[i] && i - 1 >= 0 && !used[i - 1]) {
        continue
      }

      // 如果这个数被用过, 跳过
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
