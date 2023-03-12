/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const res = []
  const board = new Array(n).fill('').map(() => new Array(n).fill('.'))

  const dfs = (row) => {
    if (row === n) {
      const formattedBoard = board.map((row) => row.join(''))
      res.push(formattedBoard)
      return
    }

    for (let col = 0; col < n; col++) {
      if (!isValid(board, row, col)) continue

      board[row][col] = 'Q'
      dfs(row + 1)
      board[row][col] = '.'
    }
  }

  dfs(0)

  return res
}

/**
 * @param {string[][]} board
 * @param {number} row
 * @param {number} col
 * @return {boolean}
 */
var isValid = function (board, row, col) {
  const n = board.length

  for (let i = 0; i < row; i++) {
    if (board[i][col] === 'Q') return false
  }

  for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
    if (board[i][j] === 'Q') return false
  }

  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 'Q') return false
  }

  return true
}
// @lc code=end

console.log(solveNQueens(8))
