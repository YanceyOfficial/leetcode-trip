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
  const dfs = (row, col) => {
    // 当横向走到头了, 就换到下一行继续回溯
    if (col === 9) return dfs(row + 1, 0)

    // 当纵向走到头了, 说明找到了一组数独解
    if (row === 9) return true

    // 双循环遍历每个元素
    for (let i = row; i < 9; i++) {
      for (let j = col; j < 9; j++) {
        // 如果当前元素已经是数字了, 我们就不用管了, 直接回溯下一个元素
        if (board[i][j] !== '.') return dfs(i, j + 1)

        // 如果当前元素是 '.'
        // 那么就从 '1' 到 '9' 依次尝试
        for (let k = 1; k <= 9; k++) {
          const ch = k.toString()

          // 如果该 char 在横向/纵向/小九宫格都已经存在过了, 说明是不合法的, 跳过即可
          if (!isValid(board, ch, i, j)) continue

          // 下面就是基本的回溯框架了.
          // 做选择:
          board[i][j] = ch
          // 回溯: 因为题目本身只有一个可行解, 因此找到就返回 true 即可, 这样就可以阻止后续的递归
          if (dfs(i, j + 1)) return true
          // 撤销选择:
          board[i][j] = '.'
        }

        // 没找到就返回 false
        return false
      }
    }

    // 这句在 JavaScript 可以不写, 但 Rust 需要
    return true
  }

  // 回溯的初始值: row = 0, col = 0
  dfs(0, 0)
}

/**
 * @param {character[][]} board
 * @param {character} ch
 * @param {number} row
 * @param {number} col
 * @return {boolean}
 */
const isValid = (board, ch, row, col) => {
  for (let i = 0; i < 9; i++) {
    // 纵向如果存在该数字, 就不能使用了, 返回 false
    if (board[row][i] === ch) return false

    // 横向如果存在该数字, 就不能使用了, 返回 false
    if (board[i][col] === ch) return false

    // 小的九宫格里如果存在该数字, 就不能使用了, 返回 false
    if (
      board[((row / 3) | 0) * 3 + ((i / 3) | 0)][
        ((col / 3) | 0) * 3 + (i % 3)
      ] === ch
    )
      return false
  }

  // 其他情况均是合法的
  return true
}
// @lc code=end
