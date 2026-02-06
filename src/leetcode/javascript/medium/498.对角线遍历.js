/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const m = mat.length
  const n = mat[0].length
  const result = []

  let row = 0
  let col = 0
  let direction = 1 // 1 for up, -1 for down

  for (let i = 0; i < m * n; i++) {
    result.push(mat[row][col])

    if (direction === 1) {
      // Going up
      if (col === n - 1) {
        // Hit right boundary
        row++
        direction = -1
      } else if (row === 0) {
        // Hit top boundary
        col++
        direction = -1
      } else {
        // Continue going up
        row--
        col++
      }
    } else {
      // Going down
      if (row === m - 1) {
        // Hit bottom boundary
        col++
        direction = 1
      } else if (col === 0) {
        // Hit left boundary
        row++
        direction = 1
      } else {
        // Continue going down
        row++
        col--
      }
    }
  }

  return result
}
// @lc code=end
