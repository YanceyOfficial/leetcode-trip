/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length
  const n = board[0].length
  const len = word.length
  const visited = new Array(m)
  for (let i = 0; i < m; i++) {
    visited[i] = new Array(n).fill(false)
  }

  // row 和 col 当前点的坐标, i 当前考察的 word 字符索引
  const dfs = (row, col, i) => {
    // 递归的出口: i 越界了就返回 true
    if (i === len) return true

    // 当前点越界, 返回 false
    if (row < 0 || row >= m || col < 0 || col >= n) return false

    // 当前点已经访问过, 或非目标点
    if (visited[row][col] || board[row][col] !== word[i]) return false

    visited[row][col] = true

    const canFindRest =
      dfs(row + 1, col, i + 1) ||
      dfs(row - 1, col, i + 1) ||
      dfs(row, col + 1, i + 1) ||
      dfs(row, col - 1, i + 1)

    if (canFindRest) return true

    visited[row][col] = false

    return false
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0] && dfs(i, j, 0)) return true
    }
  }

  return false
}
// @lc code=end
