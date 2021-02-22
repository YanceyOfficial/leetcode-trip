/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var addStrings = function (num1, num2) {
  const len = Math.max(num1.length, num2.length)
  num1 = num1.padStart(len, 0)
  num2 = num2.padStart(len, 0)

  let caddy = 0
  let res = ''

  for (let i = len - 1; i >= 0; i--) {
    const sum = +num1[i] + +num2[i] + caddy
    caddy = (sum / 10) | 0
    res = (sum % 10) + res
  }

  return caddy === 0 ? res : `1${res}`
}
// @lc code=end
