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
var isValid = function(s) {
  if (s === '') return true

  let stack = []
  for (let i = 0, l = s.length; i < l; i += 1) {
    if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
      stack.unshift(s[i])
    } else {
      if (stack[0] === '{' && s[i] === '}') stack.shift()
      else if (stack[0] === '[' && s[i] === ']') stack.shift()
      else if (stack[0] === '(' && s[i] === ')') stack.shift()
      else return false
    }
  }
  return stack.length === 0
}
// @lc code=end
