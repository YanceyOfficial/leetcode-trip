/*
 * @lc app=leetcode.cn id=1020 lang=javascript
 *
 * [1020] 飞地的数量
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  const m = grid.length
  const n = grid[0].length

  // DFS to mark all land cells connected to the boundary
  const dfs = (i, j) => {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0) {
      return
    }

    grid[i][j] = 0 // Mark as visited by changing to water

    // Explore all 4 directions
    dfs(i + 1, j)
    dfs(i - 1, j)
    dfs(i, j + 1)
    dfs(i, j - 1)
  }

  // Mark all land cells connected to the top and bottom boundaries
  for (let j = 0; j < n; j++) {
    if (grid[0][j] === 1) dfs(0, j)
    if (grid[m - 1][j] === 1) dfs(m - 1, j)
  }

  // Mark all land cells connected to the left and right boundaries
  for (let i = 0; i < m; i++) {
    if (grid[i][0] === 1) dfs(i, 0)
    if (grid[i][n - 1] === 1) dfs(i, n - 1)
  }

  // Count remaining land cells (enclaves)
  let count = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        count++
      }
    }
  }

  return count
}
// @lc code=end
