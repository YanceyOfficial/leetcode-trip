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
  const MAX = 2 ** 31 - 1
  const MIN = (-2) ** 31
  let n = 0

  while (x) {
    if (n > MAX / 10 || n < MIN / 10) return 0

    n = n * 10 + (x % 10)
    x = (x / 10) | 0
  }

  return n
}
// @lc code=end

console.log(reverse(120))
