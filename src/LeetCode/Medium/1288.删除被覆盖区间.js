/*
 * @lc app=leetcode.cn id=1288 lang=javascript
 *
 * [1288] 删除被覆盖区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
  // 首先根据区间起点进行升序排序
  // 如果两个区间起点相等, 那么按区间终点降序排序
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1]
    }
    return a[0] - b[0]
  })

  let left = intervals[0][0]
  let right = intervals[0][1]

  let res = 0

  for (let i = 1; i < intervals.length; i++) {
    const item = intervals[i]
    // 情况一, 找到覆盖区间
    if (left <= item[0] && right >= item[1]) {
      res++
    }
    // 情况二, 找到相交区间, 合并
    if (right >= item[0] && right <= item[1]) {
      right = item[1]
    }
    // 情况三, 完全不相交, 更新起点和终点
    if (right < item[0]) {
      left = item[0]
      right = item[1]
    }
  }

  return intervals.length - res
}
// @lc code=end