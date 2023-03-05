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
var mySqrt = function (x) {
  if (x < 2) return x

  const half = (x / 2) | 0
  for (let i = 1; i <= half; i++) {
    if (i * i <= x && (i + 1) * (i + 1) > x) {
      return i
    }
  }
}
// @lc code=end

console.log(mySqrt(24))
