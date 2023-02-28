/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n < 0) {
    x = 1 / x
    n = -n
  }
  let res = 1
  while (n) {
    if (n & 1) res *= x //判断 n 的二进制最后一位是否是 1,  如果是 1 则将结果乘以 x
    x *= x
    n >>>= 1 // 进行无符号右移 1 位
  }
  return res
}
// @lc code=end
