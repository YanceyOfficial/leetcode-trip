/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let n = 0

  while (x) {
    n = n * 10 + (x % 10)
    x = (x - (x % 10)) / 10
  }

  return n >= Math.pow(-2, 31) && n <= Math.pow(2, 31) - 1 ? n : 0
}
// @lc code=end

console.log(reverse(120))
