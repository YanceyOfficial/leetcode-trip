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
  if (x < 0) return false
  if (x < 10) return true

  let n = 0,
    y = x
  while (x) {
    n = n * 10 + (x % 10)
    x = (x - (x % 10)) / 10
  }
  return n === y
}
// @lc code=end

// 思路
//
// 对于一个正整数, 下面两句可以将该数字逆序
// n = n * 10 + (x % 10)
// x = (x - (x % 10)) / 10
// 这种方法又称为「取模逆排法」
