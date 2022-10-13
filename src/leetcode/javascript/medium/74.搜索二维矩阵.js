/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// 输入: `matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3`
//
// 输出: `true`

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length
  const n = matrix[0].length

  let left = 0
  let right = m * n - 1

  while (left <= right) {
    const mid = ((left + right) / 2) | 0
    const midEl = matrix[(mid / n) | 0][mid % n]
    if (midEl > target) {
      right = mid - 1
    } else if (midEl < target) {
      left = mid + 1
    } else {
      return true
    }
  }

  return false
}
// @lc code=end
