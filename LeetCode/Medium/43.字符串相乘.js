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
  let l1 = num1.length,
    l2 = num2.length
  let res = new Array(l1 + l2 - 1).fill(0)
  for (let i = 0; i < l2; i++) {
    for (let j = 0; j < l1; j++) {
      res[i + j] += +num2[i] * +num1[j]
    }
  }
  let len = res.length
  let str = '',
    num = 0
  while (len--) {
    num += res[len]
    str = (num % 10) + str
    num = (num / 10) | 0
  }
  return num > 0 ? num + str : str
}

// @lc code=end
