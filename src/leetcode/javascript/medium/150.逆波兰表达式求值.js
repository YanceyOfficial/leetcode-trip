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

  for (const token of tokens) {
    if (isNaN(token)) {
      const a = stack.pop()
      const b = stack.pop()
      stack.push(calc(token, a, b))
    } else {
      // 注意题目给的是数字字符串, 记得先转成数字再推入栈中
      stack.push(+token)
    }
  }

  return stack[0]
}

var calc = function (operator, a, b) {
  const rules = {
    '+': b + a,
    '-': b - a,
    '*': b * a,
    '/': (b / a) | 0,
  }

  return rules[operator]
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
