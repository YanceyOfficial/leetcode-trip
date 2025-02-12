/*
 * @lc app=leetcode.cn id=289 lang=javascript
 *
 * [289] 生命游戏
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const m = board.length
  const n = board[0].length
  const liveToDead = []
  const deadToLive = []

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let count = 0
      for (let x = Math.max(0, i - 1); x <= Math.min(m - 1, i + 1); x++) {
        for (let y = Math.max(0, j - 1); y <= Math.min(n - 1, j + 1); y++) {
          if (x === i && y === j) continue

          // 1 & 1 为 1
          // 0 & 1 为 0
          count += board[x][y] & 1 // 只统计当前状态, 即二进制的最后一位
        }
      }

      if (board[i][j] === 1) {
        if (count < 2 || count > 3) {
          liveToDead.push([i, j])
        }
      } else {
        if (count === 3) {
          deadToLive.push([i, j])
        }
      }
    }
  }

  for (const [i, j] of liveToDead) {
    board[i][j] = 0
  }

  for (const [i, j] of deadToLive) {
    board[i][j] = 1
  }
}

// @lc code=end

gameOfLife([
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
])
gameOfLife([
  [1, 1],
  [1, 0],
])
