/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 == '0' || num2 == '0') return '0'

  const len1 = num1.length
  const len2 = num2.length
  const len = len1 + len2 - 1
  const res = new Array(len).fill(0)

  for (let i = 0; i < len2; i++) {
    for (let j = 0; j < len1; j++) {
      res[i + j] += +num2[i] * +num1[j]
    }
  }

  let str = ''
  let carry = 0

  for (let k = len - 1; k >= 0; k--) {
    const sum = res[k] + carry
    str = (sum % 10) + str
    carry = (sum / 10) | 0
  }
  return carry > 0 ? carry + str : str
}

// @lc code=end
