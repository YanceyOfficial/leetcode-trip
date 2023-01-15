/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = new Array(9).fill(0).map(() => new Array(9).fill(0))
  const columns = new Array(9).fill(0).map(() => new Array(9).fill(0))
  const subBoxes = new Array(3)
    .fill(0)
    .map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)))

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') continue

      const index = Number(board[i][j]) - 1
      rows[i][index]++
      columns[j][index]++
      subBoxes[(i / 3) | 0][(j / 3) | 0][index]++

      if (
        rows[i][index] > 1 ||
        columns[j][index] > 1 ||
        subBoxes[(i / 3) | 0][(j / 3) | 0][index] > 1
      ) {
        return false
      }
    }
  }

  return true
}
// @lc code=end
