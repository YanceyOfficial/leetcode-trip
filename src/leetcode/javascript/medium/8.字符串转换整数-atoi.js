/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const INT_MAX = 2 ** 31 - 1
  const INT_MIN = (-2) ** 31
  const n = s.length
  let res = 0
  let sign = 1
  let i = 0

  while (s[i] === ' ') {
    i++
  }

  if (s[i] === '-') sign = -1
  if (s[i] === '+' || s[i] === '-') i++

  while (i < n && /[0-9]/.test(s[i])) {
    const num = Number(s[i])

    if (
      res > INT_MAX / 10 ||
      (res === ((INT_MAX / 10) | 0) && num > INT_MAX % 10)
    ) {
      return sign > 0 ? INT_MAX : INT_MIN
    }

    res = res * 10 + num
    i++
  }

  return sign > 0 ? res : -res
}
// @lc code=end
console.log(myAtoi('2147483646'))
