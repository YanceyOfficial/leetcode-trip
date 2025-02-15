/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {num}
 */
var calculate = function (s) {
  const stack = []
  let result = 0
  let num = 0
  let sign = 1

  for (const ch of s) {
    if (/[0-9]/.test(ch)) {
      // 构建多位数字
      num = num * 10 + Number(ch)
    } else if (ch === '+' || ch === '-') {
      // 计算之前的结果, 更新符号
      result += sign * num
      num = 0
      sign = ch === '+' ? 1 : -1
    } else if (ch === '(') {
      // 保存当前状态, 进入新的计算环境
      stack.push(result)
      stack.push(sign)
      result = 0
      sign = 1
    } else if (ch === ')') {
      // 计算括号内的结果, 与之前的结果合并
      result += sign * num
      result *= stack.pop() // 弹出括号前的符号
      result += stack.pop() // 弹出括号前的结果
      num = 0
    }
  }

  // 处理最后可能剩下的数字
  if (num !== 0) {
    result += sign * num
  }

  return result
}
// @lc code=end
