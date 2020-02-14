/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x === 0) return true

  let num = x
  const arr = []
  while (num >= 1) {
    const remainder = num % 10
    num = parseInt(num / 10, 10)
    arr.push(remainder)
  }

  return parseInt(arr.join(''), 10) === x
}
// @lc code=end

// 取模逆排法
var isPalindrome = function(x) {
  let n = 0,
    y = x
  // 把 x 的每一位数倒过来组装成 n
  while (x) {
    n = n * 10 + (x % 10)
    x = (x - (x % 10)) / 10 // 等价于 parseInt(x / 10, 10)
  }
  return y >= 0 && n === y
}
