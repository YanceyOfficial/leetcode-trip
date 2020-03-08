/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let str = s.split('')

  let i = 0
  let j = 1

  while (j < s.length) {
    ;[str[i], str[j]] = [str[j], str[i]]
    i += 2 * k
    j += 2 * k
  }

  return str.join('')
}
// @lc code=end
