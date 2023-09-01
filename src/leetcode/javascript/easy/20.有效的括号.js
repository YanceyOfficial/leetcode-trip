/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const n = s.length
  if (n % 2) return false

  const stack = []

  for (const ch of s) {
    if (ch === '{' || ch === '[' || ch === '(') {
      stack.push(ch)
    } else {
      const top = stack[stack.length - 1]
      if (top === '{' && ch === '}') stack.pop()
      else if (top === '[' && ch === ']') stack.pop()
      else if (top === '(' && ch === ')') stack.pop()
      else return false
    }
  }

  return stack.length === 0
}
// @lc code=end
