/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const len = Math.max(a.length, b.length)

  a = a.padStart(len, 0)
  b = b.padStart(len, 0)

  let carry = 0
  let res = ''

  for (let i = len - 1; i >= 0; i--) {
    const sum = +a[i] + +b[i] + carry
    carry = (sum / 2) | 0
    res = (sum % 2) + res
  }

  return carry === 0 ? res : `1${res}`
}
// @lc code=end

// var addBinary = function(a, b) {
//   return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);
// };
