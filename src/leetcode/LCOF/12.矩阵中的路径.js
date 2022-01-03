/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length
  const n = board[0].length
  const len = word.length
  const used = new Array(m)
  for (let i = 0; i < m; i++) {
    used[i] = new Array(n).fill(false)
  }

  const backtrack = (row, col, i) => {
    if (i === len) return true

    if (row < 0 || row >= m || col < 0 || col >= n) return false

    if (board[row][col] !== word[i] || used[row][col]) return false

    used[row][col] = true

    const rest =
      backtrack(row - 1, col, i + 1) ||
      backtrack(row + 1, col, i + 1) ||
      backtrack(row, col - 1, i + 1) ||
      backtrack(row, col + 1, i + 1)

    if (rest) return true

    used[row][col] = false

    return false
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0] && backtrack(i, j, 0)) return true
    }
  }

  return false
}
