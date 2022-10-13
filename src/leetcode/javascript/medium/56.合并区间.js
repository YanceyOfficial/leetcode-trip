/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const len = intervals.length
  const res = []
  if (len === 0) return res
  intervals.sort((a, b) => a[0] - b[0])
  res.push(intervals[0])

  for (let i = 1; i < len; i++) {
    const curr = intervals[i]
    const last = res[res.length - 1]

    if (curr[0] <= last[1]) {
      last[1] = Math.max(last[1], curr[1])
    } else {
      res.push(curr)
    }
  }

  return res
}
// @lc code=end
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
)
