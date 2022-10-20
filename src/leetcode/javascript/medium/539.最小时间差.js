/*
 * @lc app=leetcode.cn id=539 lang=javascript
 *
 * [539] 最小时间差
 */

// @lc code=start
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  const n = timePoints.length
  const minutes = timePoints.map((t) => parseTime(t)).sort((a, b) => a - b)
  let min = minutes[0] + 24 * 60 - minutes[n - 1]

  for (let i = 1; i < n; i++) {
    const prev = minutes[i - 1]
    const curr = minutes[i]
    min = Math.min(min, curr - prev)
  }

  return min
}

var parseTime = function (timePoints) {
  const [hour, minute] = timePoints.split(':')
  return +hour * 60 + +minute
}
// @lc code=end
