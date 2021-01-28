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

  const backtrack = (begin, track, sum) => {
    if (target === sum) {
      res.push(track.slice())
      return
    }

    for (let i = begin; i < len; i++) {
      if (sum < target) {
        track.push(candidates[i])
        backtrack(i, track, sum + candidates[i])
        track.pop()
      }
    }
  }

  backtrack(0, [], 0)
  return res
}
// @lc code=end
console.log(combinationSum([2, 3, 5], 8))

// 只要限制下一次选择的起点, 是基于本次的选择,
// 这样下一次就不会选到本次选择的同层左边的数.
// 即通过控制 for 遍历的起点, 去掉会产生重复组合的选项.
