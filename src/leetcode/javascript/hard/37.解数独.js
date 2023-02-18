/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const isValid = (ch, row, col) => {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === ch) return false
      if (board[i][col] === ch) return false
      if (
        board[((row / 3) | 0) * 3 + ((i / 3) | 0)][
          ((col / 3) | 0) * 3 + (i % 3)
        ] === ch
      )
        return false
    }
    return true
  }

  const backtracking = (row, col) => {
    if (col === 9) return backtracking(row + 1, 0)
    if (row === 9) return true

    for (let i = row; i < 9; i++) {
      for (let j = col; j < 9; j++) {
        if (board[i][j] !== '.') {
          return backtracking(i, j + 1)
        }

        for (let k = 1; k <= 9; k++) {
          if (!isValid(k.toString(), i, j)) continue

          board[i][j] = k.toString()
          if (backtracking(i, j + 1)) return true
          board[i][j] = '.'
        }

        return false
      }
    }

    return true
  }

  backtracking(0, 0)
}
// @lc code=end
