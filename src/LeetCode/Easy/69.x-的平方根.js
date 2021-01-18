/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x < 2) return x

  const halfX = (x - (x % 2)) / 2
  for (let i = 1; i <= halfX; i++) {
    if (i * i <= x && (i + 1) * (i + 1) > x) {
      return i
    }
  }
}
// @lc code=end
