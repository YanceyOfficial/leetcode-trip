/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  let total = 0
  const n = intervals.length
  intervals.sort((a, b) => a[1] - b[1])

  let end = intervals[0][1]

  for (let i = 1; i < n; i++) {
    const curr = intervals[i]

    if (curr[0] < end) {
      total++
    } else {
      end = curr[1]
    }
  }

  return total
}
// @lc code=end
console.log(
  eraseOverlapIntervals([
    [1, 100],
    [11, 22],
    [1, 11],
    [2, 12],
  ]),
)
