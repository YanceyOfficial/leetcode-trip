/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (num >= 10) return addDigits((num - (num % 10)) / 10 + (num % 10))
  return num
}
// @lc code=end
var addDigits = function(num) {
  return (num && (num % 9 ? num % 9 : 9)) || 0
}
