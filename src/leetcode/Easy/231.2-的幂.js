/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  return (Math.log10(n) / Math.log10(2)) % 1 === 0
}

// 一个数如果是 2 的指数, 那么它的二进制表示一定只含有一个 1
var isPowerOfTwo = function (n) {
  if (n <= 0) return false
  return (n & (n - 1)) == 0
}
// @lc code=end
