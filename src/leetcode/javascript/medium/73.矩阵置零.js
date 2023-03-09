/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length

  let flagCol0 = false
}
// @lc code=end
const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
]
setZeroes(matrix)
console.log(matrix)

const _matrix = [
  [0, 0, 0, 0],
  [0, 4, 5, 0],
  [0, 3, 1, 0],
]
