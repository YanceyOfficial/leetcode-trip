/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const rows = grid.length
  const columns = grid[0].length

  const dp = []
  for (let i = 0; i < rows; i++) {
    dp.push(new Array(columns).fill(0))
  }

  // dp[i][j] 表示从左下角走到 i, j 的最小路径和
  dp[0][0] = grid[0][0] // base case

  // 一直往右走
  for (let i = 1; i < rows; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0]
  }

  // 一直往下走
  for (let j = 1; j < columns; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j]
  }

  // 左和右都走可能走, 比较值
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    }
  }

  return dp[rows - 1][columns - 1]
}
// @lc code=end

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]),
)
