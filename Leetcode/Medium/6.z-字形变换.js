/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows < 2) return s

  let r = Array(numRows).fill(''),
    c = (numRows - 1) * 2

  s.split('').forEach((l, i) => (r[i % c < numRows ? i % c : c - (i % c)] += l))
  return r.join('')
}
// @lc code=end
