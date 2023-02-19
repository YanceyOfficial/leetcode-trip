/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let count = 0
  const board = new Array(n).fill('').map(() => new Array(n).fill('.'))

  const backtracking = (row) => {
    if (row === n) {
      count++
      return
    }

    for (let col = 0; col < n; col++) {
      if (!idValid(board, row, col)) continue

      board[row][col] = 'Q'
      backtracking(row + 1)
      board[row][col] = '.'
    }
  }

  backtracking(0)

  return count
}

/**
 * @param {string[][]} board
 * @param {number} row
 * @param {number} col
 * @return {number}
 */
var idValid = function (board, row, col) {
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
