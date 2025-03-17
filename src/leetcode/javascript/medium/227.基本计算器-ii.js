/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const n = s.length
  let num = 0
  let prevSign = '+'
  const stack = []

  for (let i = 0; i < n; i++) {
    const ch = s[i]

    if (/\d/.test(ch)) {
      num = num * 10 + Number(ch)
    }

    if (['+', '-', '*', '/'].includes(ch) || i === n - 1) {
      if (prevSign === '+') {
        stack.push(num)
      }
      if (prevSign === '-') {
        stack.push(-num)
      }
      if (prevSign === '*') {
        stack.push(stack.pop() * num)
      }
      if (prevSign === '/') {
        stack.push((stack.pop() / num) | 0)
      }

      prevSign = ch
      num = 0
    }
  }

  return stack.reduce((acc, val) => acc + val)
}
// @lc code=end
