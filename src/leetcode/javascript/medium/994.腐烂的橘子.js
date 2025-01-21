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
var orangesRotting = function (grid) {
  if (!grid || grid.length === 0) return 0

  const m = grid.length
  const n = grid[0].length
  const queue = []
  let freshCount = 0
  let time = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j])
      } else if (grid[i][j] === 1) {
        freshCount++
      }
    }
  }

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ] // 上下左右四个方向

  while (queue.length > 0 && freshCount > 0) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const [row, col] = queue.shift()

      for (const [dr, dc] of directions) {
        const nr = row + dr
        const nc = col + dc

        if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] === 1) {
          grid[nr][nc] = 2 // 腐烂
          queue.push([nr, nc])
          freshCount--
        }
      }
    }
    time++ // 时间加 1 分钟
  }

  return freshCount === 0 ? time : -1
}
// @lc code=end

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]),
)
