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
var addBinary = function(a, b) {
  const maxLen = Math.max(a.length, b.length)

  a = a.padStart(maxLen, '0')
  b = b.padStart(maxLen, '0')

  let arr = Array.from({ length: maxLen }, () => 0)
  let carry = 0

  for (let i = maxLen - 1; i >= 0; i--) {
    const currA = a[i] | 0,
      currB = b[i] | 0
    const sum = currA + currB + carry
    carry = sum / 2 >= 1 ? 1 : 0
    arr[i] += carry ? sum % 2 : sum
  }

  let res = arr.join('')
  return carry ? `1${res}` : res
}
// @lc code=end

// var addBinary = function(a, b) {
//   return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);
// };
