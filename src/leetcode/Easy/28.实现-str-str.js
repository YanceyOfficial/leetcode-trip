/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === '') return 0

  let i = 0,
    j = needle.length

  while (j <= haystack.length) {
    if (haystack.slice(i, j) === needle) {
      return i
    } else {
      i++
      j++
    }
  }

  return -1
}
// @lc code=end
