/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const n = intervals.length
  const newIntervals = []
  let i = 0

  while (i < n && intervals[i][1] < newInterval[0]) {
    newIntervals.push(intervals[i])
    i++
  }

  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0])
    newInterval[1] = Math.max(newInterval[1], intervals[i][1])
    i++
  }
  newIntervals.push(newInterval)

  while (i < n) {
    newIntervals.push(intervals[i])
    i++
  }

  return newIntervals
}
// @lc code=end
console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5],
  ),
)

console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8],
  ),
)

console.log(insert([], [5, 7]))

console.log(insert([[1, 5]], [2, 3]))

console.log(insert([[1, 5]], [2, 7]))
