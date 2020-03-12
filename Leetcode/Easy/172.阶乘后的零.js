/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let total = 0
  
  while (n >= 5) {
    n = Math.floor(n / 5)
    total += n
  }
  return total
}
// @lc code=end
