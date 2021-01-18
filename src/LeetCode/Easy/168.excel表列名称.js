/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let res = ''

  while (n > 0) {
    if (n % 26 !== 0) {
      res = String.fromCharCode((n % 26) + 64) + res
      n = (n / 26) | 0
    } else {
      res = 'Z' + res
      n = (n / 27) | 0
    }
  }

  return res
}
// @lc code=end
