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
var reverse = function(x) {
  if (x > -10 && x < 10) {
    return x
  }

  function getReverse(num) {
    return parseInt(
      num
        .toString()
        .split('')
        .reverse()
        .join(''),
      10,
    )
  }

  let res = 0

  if (x < 0) {
    res = getReverse(x * -1) * -1
  } else {
    res = getReverse(x)
  }

  if (res <= (-2) ** 31 || res >= 2 ** 31 - 1) {
    return 0
  }

  return res
}
// @lc code=end
