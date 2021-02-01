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
  const used = new Array(k).fill(false)

  const backtrack = (begin, track, sum) => {
    if (track.length === k && sum === n) {
      res.push(track.slice())
      return
    }

    // 使用 begin 来限制下一次选择的起点, 是基于本次的选择, 这样下一次就不会选到本次选择的同层左边的数.
    for (let i = begin; i < 10; i++) {
      // 同层相邻两个数不能相等, 当然要保证 i - 1 不越界, 且 i - 1 没被用过
      if (i - 1 === i && i - 1 >= 0 && !used[i - 1]) {
        continue
      }

      // 如果这个数被用过, 跳过
      if (used[i]) {
        continue
      }
      if (sum < n) {
        track.push(i)
        used[i] = true
        backtrack(i, track, sum + i)
        track.pop()
        used[i] = false
      }
    }
  }

  backtrack(1, [], 0)

  return res
}
// @lc code=end
