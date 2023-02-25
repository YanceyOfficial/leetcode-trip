/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0))
  let top = 0,
    right = n - 1,
    bottom = n - 1,
    left = 0

  let val = 1

  while (val <= n * n) {
    for (let i = left; i <= right; i++, val++) matrix[top][i] = val
    top++

    for (let i = top; i <= bottom; i++, val++) matrix[i][right] = val
    right--

    for (let i = right; i >= left; i--, val++) matrix[bottom][i] = val
    bottom--

    for (let i = bottom; i >= top; i--, val++) matrix[i][left] = val
    left++
  }

  return matrix
}
// @lc code=end
console.log(generateMatrix(3))
