/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let a = 0
  let b = Math.sqrt(c) | 0
  while (a <= b) {
    const res = a * a + b * b
    if (res < c) {
      a++
    } else if (res > c) {
      b--
    } else {
      return true
    }
  }
  return false
}
// @lc code=end

var judgeSquareSum = function (c) {
  for (let a = 0; a <= Math.sqrt(c); a++) {
    const b = Math.sqrt(c - a * a)

    if (b === Math.ceil(b)) {
      return true
    }
  }

  return false
}
