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
  const MIN = (-2) ** 31
  const MAX = 2 ** 31 - 1
  let n = 0
  let idx = 0
  let sign = 1
  while (s[idx] === ' ') {
    idx++
  }

  if (s[idx] === '+') {
    idx++
  } else if (s[idx] === '-') {
    idx++
    sign = -1
  }

  while (/\d/.test(s[idx])) {
    if (sign === 1 && (MAX - Number(s[idx])) / 10 < n) return MAX
    if (sign === -1 && (-MIN - Number(s[idx])) / 10 < n) return MIN

    n = n * 10 + Number(s[idx])
    idx++
  }

  return sign === -1 ? -1 * n : n
}
// @lc code=end
console.log(myAtoi('   -042'))
