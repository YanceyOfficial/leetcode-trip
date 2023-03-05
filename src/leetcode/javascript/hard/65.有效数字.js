/*
 * @lc app=leetcode.cn id=65 lang=javascript
 *
 * [65] 有效数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  let state = 0
  const n = s.length
  const finals = [false, false, false, true, false, true, true, false, true]
  const transfers = [
    [0, 1, 6, 2, -1, -1],
    [-1, -1, 6, 2, -1, -1],
    [-1, -1, 3, -1, -1, -1],
    [8, -1, 3, -1, 4, -1],
    [-1, 7, 5, -1, -1, -1],
    [8, -1, 5, -1, -1, -1],
    [8, -1, 6, 3, 4, -1],
    [-1, -1, 5, -1, -1, -1],
    [8, -1, -1, -1, -1, -1],
  ]

  const make = (ch) => {
    if (/[0-9]/.test(ch)) return 2

    switch (ch) {
      case ' ':
        return 0
      case '+':
      case '-':
        return 1
      case '.':
        return 3
      case 'e':
      case 'E':
        return 4
      default:
        return 5
    }
  }

  for (const ch of s) {
    state = transfers[state][make(ch)]

    // 如果遇到非法状态, 提前终止
    if (state < 0) return false
  }

  // 如果遍历完后能成功到达终止状态, 说明是一个合法数字, 否则失败
  return finals[state]
}
// @lc code=end
