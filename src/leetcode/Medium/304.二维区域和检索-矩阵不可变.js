/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */

var NumMatrix = function (matrix) {
  this.m = matrix.length
  this.n = matrix[0].length
  if (this.m > 0) {
    this.preSum = new Array(this.n * this.m + 1).fill(0)

    // 遍历二维数组的每个元素, 添加到前缀和 preSum 中
    for (let i = 0; i < this.m; i++) {
      for (let j = 0; j < this.n; j++) {
        const element = matrix[i][j]
        this.preSum[i * this.n + (j + 1)] =
          this.preSum[i * this.n + j] + element
      }
    }
  }
}

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */

NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let sum = 0

  // 逐行遍历, 比如示例中的红框, 需要分别计算如下三个子数组(数字为索引)的累加和:
  // 11 - 13
  // 16 - 18
  // 21 - 23
  // 然后把这个三个子数组加到一起, 便是这个框的加和
  for (let i = 0; i <= row2 - row1; i++) {
    const start = (row1 + i) * this.n + col1
    const end = (row1 + i) * this.n + col2
    sum += this.preSum[end + 1] - this.preSum[start]
  }

  return sum
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

const o = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
])

console.log(o.sumRegion(2, 1, 4, 3)) // 8
console.log(o.sumRegion(1, 1, 2, 2)) // 11
console.log(o.sumRegion(1, 2, 2, 4)) //12
