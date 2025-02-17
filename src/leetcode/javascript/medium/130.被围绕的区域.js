/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const m = board.length
  const n = board[0].length

  const dfs = (i, j) => {
    if (i < 1 || i >= m - 1 || j < 1 || j >= n - 1) return false
    if (board[i][j] === 'X') return true

    const hasX =
      dfs(i + 1, j) || dfs(i - 1, j) || dfs(i, j + 1) || dfs(i, j - 1)

    if (hasX) {
      board[i][j] = 'X'
    }

    return hasX
  }

  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (board[i][j] === 'O') {
        dfs(i, j)
      }
    }
  }

  console.log(board)
}
// @lc code=end
solve([
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X'],
])
