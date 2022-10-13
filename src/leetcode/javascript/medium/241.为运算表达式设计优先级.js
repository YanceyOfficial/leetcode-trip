/*
 * @lc app=leetcode.cn id=241 lang=javascript
 *
 * [241] 为运算表达式设计优先级
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
  const n = expression.length
  const res = []
  for (let i = 0; i < n; i++) {
    const letter = expression[i]
    if (letter === '+' || letter === '-' || letter === '*') {
      /****** 分 ******/
      let left = diffWaysToCompute(expression.slice(0, i))
      let right = diffWaysToCompute(expression.slice(i + 1))
      /****** 治 ******/
      for (const a of left) {
        for (const b of right) {
          if (letter == '+') res.push(a + b)
          if (letter == '-') res.push(a - b)
          if (letter == '*') res.push(a * b)
        }
      }
    }
  }

  // base case, 代表着你「分」到什么时候可以开始「治」
  // 如果 res 为空, 说明算式是一个数字, 没有运算符, 就说明分完了, 可以治了
  if (res.length === 0) {
    res.push(+expression)
  }

  return res
}
// @lc code=end

console.log(diffWaysToCompute('2 * 3 - 4 * 5'))
