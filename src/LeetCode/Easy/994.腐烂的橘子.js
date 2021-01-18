/*
 * @lc app=leetcode.cn id=994 lang=javascript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  const map = {}

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 2) {
        if (grid[i - 1] && grid[i - 1][j] === 1) {
          grid[i - 1][j] = 2
        }

        if (grid[i][j - 1] === 1) {
          grid[i][j - 1] = 2
        }

        if (grid[i + 1] && grid[i + 1][j] === 1) {
          grid[i + 1][j] = 2
        }

        if (grid[i][j + 1] === 1) {
          grid[i][j + 1] = 2
        }
      }
    }
  }

  console.log(grid)
}
// @lc code=end

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]),
)
