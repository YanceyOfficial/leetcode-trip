/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = []

  for (const char of tokens) {
    if (/\d/.test(char)) {
      stack.push(Number(char))
    } else {
      const a = stack.pop()
      const b = stack.pop()

      if (char === '+') {
        stack.push(b + a)
      }
      if (char === '-') {
        stack.push(b - a)
      }
      if (char === '*') {
        stack.push(b * a)
      }
      if (char === '/') {
        stack.push((b / a) | 0)
      }
    }
  }

  return stack[0]
}
// @lc code=end

console.log(evalRPN(['3', '11', '+', '5', '-']))
console.log(evalRPN(['2', '1', '+', '3', '*']))
console.log(evalRPN(['4', '13', '5', '/', '+']))
console.log(
  evalRPN([
    '10',
    '6',
    '9',
    '3',
    '+',
    '-11',
    '*',
    '/',
    '*',
    '17',
    '+',
    '5',
    '+',
  ]),
)
