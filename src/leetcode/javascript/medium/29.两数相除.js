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
var divide = function (dividend, divisor) {
  const INT_MAX = 2 ** 31 - 1
  const INT_MIN = (-2) ** 31
  const sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1

  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)

  let ans = 0
  while (dividend >= divisor) {
    let temp = divisor,
      multiple = 1

    // a << 1 相当于 a * 2
    while (dividend >= temp << 1) {
      temp <<= 1
      multiple <<= 1
    }
    dividend -= temp
    ans += multiple
  }

  const res = ans * sign
  if (res < INT_MIN || res > INT_MAX) {
    return INT_MAX
  } else {
    return res
  }
}
// @lc code=end
