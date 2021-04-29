/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const n = s.length
  const stack = [-1]

  let max = 0
  for (let i = 0; i < n; i++) {
    const curr = s[i]
    if (curr === '(') {
      stack.push(i)
    } else {
      stack.pop()

      if (stack.length !== 0) {
        max = Math.max(i - stack[stack.length - 1], max)
      } else {
        stack.push(i)
      }
    }
  }

  return max
}
// @lc code=end
console.log(longestValidParentheses(')()())'))
