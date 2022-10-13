/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor, i = 0, r = 0, p = '') {
  dividend > 0 ? (dividend = -dividend) : (p = '-')
  divisor > 0 ? (divisor = -divisor) : (p = p ? '' : '-')
  while (dividend) {
    while (
      i <= 31 &&
      divisor >= -1 << (31 - i) &&
      divisor << i >= dividend &&
      ++i
    ) {}
    if (i === 0) {
      break
    }
    dividend = dividend - (divisor << --i)
    r += Math.pow(2, i)
    i = 0
  }
  return parseInt(p + (!p && r >= 2147483648 ? 2147483647 : r))
}

// @lc code=end
